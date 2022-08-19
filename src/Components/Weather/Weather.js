import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
  // const [latitude, setLatitude] = useState(0)
  // const [longitude, setLongitude] = useState(0)
  const [detail, setDetail] = useState('')
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState(0)

  // const savePositionToState = (position) => {
  //     setLatitude(position.coords.latitude)
  //     setLongitude(position.coords.longitude)
  // }

  const fetchWeather = async () => {
    try {
      // await window.navigator.geolocation.getCurrentPosition(savePositionToState)
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Calicut&units=metric&appid=5b3fdea5b94db9e533728fe28aeb042c')
      setCity(res.data.name)
      setTemp(res.data.main.temp)
      setDetail(res.data.weather[0].main)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
        <>
            <div className='container'>
                <h4>Current Weather Details</h4>
                <h6>{city}</h6>
                <h6>{temp} °C</h6>
                <h6>{detail}</h6>
                {/* <h6>{details.data.name}</h6>
                <h6>{details.data.temp}</h6> */}<hr />
            </div>
        </>
  )
}

export default Weather
