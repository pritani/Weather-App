import React from 'react'
class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info ">
                {/* ALL are empty */}
                {
                this.props.city && this.props.country && <p className="weather__key " >Location: 
                <span>{this.props.city},  {this.props.country} </span>
                </p>
                 }
          {
          this.props.temperature &&   <p className="weather__key "> temperature:
          <span>{this.props.temperature}</span> </p>
           }
          {
          this.props.humidity &&    <p className="weather__key ">  Humidity: 
              <span>{this.props.humidity}</span>
              </p>
           }
          {
          this.props.description &&   <p className="weather__key "> Conditions: 
              <span> {this.props.description}</span>
              </p> 
           }
          {
          this.props.error && <p>{this.props.error}</p>
          }
          {/* <p> Location: {this.props.city},  {this.props.country}</p>
            <p>  Humidity: {this.props.humidity}</p> 
            <p> temperature: {this.props.temperature}</p> 
            <p> Conditions:  {this.props.description}</p>  */}
              
           
            </div>
        )
    }
}
export default Weather