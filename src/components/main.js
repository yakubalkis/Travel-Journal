import React from "react";
import locationIcon from '../img/location-icon.png'
export default  function Main(props){
    return (
        <div className="card">
            <div className="card-components">
                <div className="card-img"><img src={props.img}/></div>
                <div className="card-info">
                    <div className="card-head">
                        <img src={locationIcon}/> 
                        <div className="bet">
                        <label>{props.location.toUpperCase()}</label>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                        </div>
                    </div>
                    <h1>{props.title}</h1>
                    <h5>{props.startDate} - {props.endDate}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}