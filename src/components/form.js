import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="zipcode" placeholder="zipcode..."></input>
                <input type="text" name="country" placeholder="country..."></input>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;
