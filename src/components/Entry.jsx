import React from 'react'

export default function Entry(props) {
    return (
        <div className="page">
            <div>
                <img src={props.item.img} className="page--location-pic" />
            </div>
            <div className='page--info'>
                <div className='page--info--maps'>
                    <img src="src\images\random_icons_23.png" className="page--location-icon" />
                    <p className='page--country'>{props.item.country}</p>
                    <p className='page--googleMaps'><a href="{props.item.googleLink}">View on Google Maps</a></p>
                </div>
                <h1 className='page--title'>{props.item.location}</h1>
                <p className='page--date'>{props.item.date}</p>
                <p className='page--text'>{props.item.text}</p>
            </div>
        </div>
    )
}