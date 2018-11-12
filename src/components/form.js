import React from 'react'

const Form = props => (  
        <form onSubmit={props.getWeather} className='form-container__form'>
            <div>
                <input type='text' name='zipcode' placeholder='zipcode...'></input>
            </div>
            <div>
                <input type='text' name='country' placeholder='country...'></input>
            </div>
            <button type='submit' className='btn btn-primary form-container__button'>Submit</button>
        </form>
);

export default Form;
