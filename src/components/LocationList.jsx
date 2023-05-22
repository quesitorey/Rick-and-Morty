
const LocationList = ({location}) => {

    return (
        <div className="location">


            <ul>
                
                    <li className="info-box" key={location.id}>
                            <h4 className="info">{location.id}</h4>
                            <h4 className="info">{location.name}</h4>
                            <p className="info"><b>Tipo: </b>{location.type}</p>
                            <p className="info"><b>Dimension: </b>{location.dimension}</p>
                            <p className="info"><b>Residentes: </b>{location.residents?.length}</p>
                        </li>
                   
                
            </ul>
        </div>
    );
};

export default LocationList;