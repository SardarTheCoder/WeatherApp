import React, { useEffect, useState } from 'react'
import './style.css'
const Weather = ({tempInfo}) => {
      
    const [weatherIcon, setWeatherIcon] = useState("");

     const{
        temp,humidity,pressure
              ,name,weathermood,
              speed,country,sunset
     } = tempInfo;
     console.log(tempInfo);

     let sec =sunset;
       let date =new Date(sec * 1000);
       let timeStr = `${date.getHours()}:${date.getMinutes()}`;


       useEffect(()=>{
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherIcon("wi-day-cloudy");
                    break;
    
                case "Haze":
                    setWeatherIcon("wi-fog");
                    break;
    
                case "Clear":
                    setWeatherIcon("wi-day-sunny");
                    break;
    
                default:
                    setWeatherIcon("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);



  return (
    <>
          <article className="widget p-1">
          <div className="weatherIcon">
        <i className={`wi ${weatherIcon}`}></i>
           </div>


              <div className="weatherInfo">

                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>

                  <div className="describtion">
                    <div className="weatherCondition">
                        {weathermood}
                    </div>
                    <div className="place">{name},{country}</div>
                  </div>
              </div>
              <div className="date">
                {new Date().toLocaleTimeString()}
              </div>


              <div className="extra-temp">
                <div className="temp-info-minmax ml-5">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i>
                        </p>
                        <p className='extra-info-leftside p-5'>
                            sunset<br/>
                        {timeStr}PM
                        </p>
                     </div>
                </div>
             

              <div className="extra-temp ">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i>
                        </p>
                        <p className='extra-info-leftside p-5'>
                           
                        Humidity<br/>
                        {humidity} 
                        </p>
                     </div>
                </div>
              </div> 


              <div className="weather-extra-info">
              <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i>
                        </p>
                        <p className='extra-info-leftside p-5'>
                            
                             Pressure<br/>
                            {pressure}
                        </p>
                     </div>
              </div> 
              
              <div className="weather-extra-info">
              <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className='extra-info-leftside p-5'>
                          
                             Speed <br/>
                            {speed}
                        </p>
                     </div>
              </div> 
              </div> 



         </article>


    </>
  )
}

export default Weather


