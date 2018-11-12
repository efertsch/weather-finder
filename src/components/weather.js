import React from 'react'

const Weather = props => (
    <div className='weather-info'>
        { props.city && props.country && props.temperature && props.humidity && <p className='text-center weather-info__text'> Right now in <span className='weather-info__value'> {props.city}, {props.country} </span> it is <span className='weather-info__value'>{props.temperature}ºF</span> with <span className='weather-info__value'>{props.humidity}%</span> humidity</p>  }
        { props.description && <p className='text-center weather-info__text'>The current conditions are described as: <span className='weather-info__value'>{ props.description }</span></p> }
        { props.error && <p className='weather-info__error text-center'>{ props.error }</p> }
    </div>
);

export default Weather; 