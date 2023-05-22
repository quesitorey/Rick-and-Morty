import { useState, useEffect } from "react";
import axios from "axios";

const ResidentInfo = ({url}) => {

    const [ resident, setResident ] = useState({})

    useEffect(() => {
        axios
            .get(url)
            .then(resp => setResident(resp.data))
            .catch( err => console.error(err) )
    }, [])



    return (

        <div className="card-container">
            <ul className="resident-card"> 
                <img src={resident.image} className="card-img" alt="" />
                <p><b>Nombre: </b>{resident.name}</p>
                <p><b>Especie: </b>{resident.species}</p>
                <p><b>Origen: </b>{resident.origin?.name}</p>
                <p><b>Episodios: </b>{resident.episode?.length}</p>
            </ul>
        </div>
    );
};

export default ResidentInfo;