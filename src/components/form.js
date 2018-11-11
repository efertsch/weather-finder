import React from 'react'

const Form = props => (  
    <form onSubmit={props.getWeather}>
        <input type="text" name="zipcode" placeholder="zipcode..."></input>
        <input type="text" name="country" placeholder="country..."></input>
        <button>Submit</button>
    </form>
);

export default Form;
