// https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=229049f60f39c6a5cb5c68f1e670d5f5

import React, { useEffect, useState } from 'react'
import Weather from "./Weather";
import "./style.css"
const Temp = () => {

     const [searchValue , setsearchValue] = useState("Islamabad");
     const [weatherInfo,setWeatherInfo]=useState({})
     
     const getWeatherInfo= async () => {

            try{
              let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=229049f60f39c6a5cb5c68f1e670d5f5`
              let res = await fetch(url);
             let data = await res.json();
             const {temp,humidity,pressure} = data.main;
             const {main:weathermood}=data.weather[0];
             const {name}= data;
             const {speed}=data.wind;
             const{country,sunset}=data.sys;
            //  console.log(temp);
            //  console.log(humidity);
            //  console.log(pressure);
            //  console.log(data) 

             const newWeatherInfo={
              temp,humidity,pressure
              ,name,weathermood,
              speed,country,sunset
             };
               setWeatherInfo(newWeatherInfo);

            }
            catch(error){
              console.log(error)
                  }
              }

      useEffect(()=>{
        getWeatherInfo()
      },[])

  return (
    <>
         <div className="wrap">
            <div className="search">
                <input type="search" value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} placeholder='search....' autoFocus id="search" className='searchTerm' />
                <button className='searchButton' type='button' onClick={getWeatherInfo}
                 >City</button>
            </div>
         </div>

        <Weather tempInfo={weatherInfo}/>
    </>
  )
}

export default Temp
