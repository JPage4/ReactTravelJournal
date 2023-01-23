import React from "react";

export default function Location(props) {

    return (
        <div className="location">
            <img src={props.imageUrl} className='location--pic'></img>
            <img src='src\images\pin.png' className='pin'></img>
            <h3 className='location--country'>{props.country}</h3>
            <p className='location--URL' href='{props.googleMapsUrl}'>View on Google Maps</p>
            <h1 className='location--title'>{props.title}</h1>
            <p className='location--dates'>{props.startDate} - {props.endDate}</p>
            <p className='location--description'>{props.description}</p>
            {/* <hr className='location--line'></hr> */}
        </div>
    )
  }