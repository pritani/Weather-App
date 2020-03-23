import React from 'react';
import Title from './components/title'
import Form from './components/form'
import Weather from './components/weather'
const API_KEY="ff8dd66e14a6b2503246feb50ff33f35"
class App extends React.Component{
  constructor(){
    super()
    this.state={
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:''
    }
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city=e.target.elements.city.value
    const country=e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city&& country){
    console.log(data)//whole page refresh not see output..so e use
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
  }
  else{
    this.setState({
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'Please enter the values'
    })
  }
}
  render(){
    return(
      <div>
        <div className="wrapper">
        <div className="main">
        <div className="container">
        <div className="row">
      
          <div className="col-xs-5 title-container">
            <Title/>
          </div>
          <div className="col-xs-7 form-container">
          <Form getWeather={this.getWeather}/>
 <Weather 
 temperature={this.state.temperature}
 city={this.state.city}
 country={this.state.country}
 humidity={this.state.humidity}
 description={this.state.description}
 error={this.state.error}
 />

          </div>

          </div>
          </div>
          </div>
      </div>
      </div>
    )
  }
}

 
 

export default App;
