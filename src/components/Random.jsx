import { useState, useEffect } from "react";
import LocationList from "./LocationList";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";
import Page from "./Page";

const Random = () => {

    const [ locationList, setLocationList ] = useState([])
    const [ searchLocation, setSearchLocation ] = useState("")
    const [ page, setPage ] = useState(1)

    useEffect(() => {
        let randomLocation = Math.floor(Math.random() * 126) + 1
         axios
           .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
           .then( resp => setLocationList(resp.data))
       }, [])

       const search = e => {
        e.preventDefault()
        if (searchLocation <= 126) {
            axios 
          .get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
          .then(resp => setLocationList(resp.data))
          setSearchLocation("")
        }else{
            alert("Numero no valido")
        }
      }


      const perPage = 5
      const quantityPage = Math.ceil(locationList.residents?.length / perPage)

      const index = (page - 1) * perPage

      const residents = locationList.residents?.slice(index, index + perPage) 

    return (
        <div>
            <form onSubmit={e => search}>
            <input 
            className="search"
            type="text" 
            name="search" 
            id="search" 
            placeholder="Escribe la ID ( 1 - 126 )"
            value={searchLocation}
            onChange={e => setSearchLocation(e.target.value)}
            />
            <button onClick={search}>Buscar</button>
            </form>

            <LocationList
            location={locationList}
            ></LocationList>

            <Page
            page={page}
            setPage={setPage}
            quantity={quantityPage}
            ></Page>

            <div className="card">
            {
                residents?.map(resident => (
                    <ResidentInfo url={resident} key={resident}></ResidentInfo>
                ))
            }
            </div>
        </div>
    );
};

export default Random;