// import React, { useEffect, useState } from "react";
// import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../assets/weather.css";

import "../assets/index.css";
const currentDate = new Date().toLocaleDateString("ar-AR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  numberingSystem: "arab",
});

// const demo = {
//   lat: 33.44,
//   lon: -94.04,
//   timezone: "America/Chicago",
//   timezone_offset: -18000,
//   current: {
//     dt: 1684929490,
//     sunrise: 1684926645,
//     sunset: 1684977332,
//     temp: 292.55,
//     feels_like: 292.87,
//     pressure: 1014,
//     humidity: 89,
//     dew_point: 290.69,
//     uvi: 0.16,
//     clouds: 53,
//     visibility: 10000,
//     wind_speed: 3.13,
//     wind_deg: 93,
//     wind_gust: 6.71,
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04d",
//       },
//     ],
//   },
//   minutely: [
//     {
//       dt: 1684929540,
//       precipitation: 0,
//     },
//   ],
//   hourly: [
//     {
//       dt: 1684926000,
//       temp: 292.01,
//       feels_like: 292.33,
//       pressure: 1014,
//       humidity: 91,
//       dew_point: 290.51,
//       uvi: 0,
//       clouds: 54,
//       visibility: 10000,
//       wind_speed: 2.58,
//       wind_deg: 86,
//       wind_gust: 5.88,
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04n",
//         },
//       ],
//       pop: 0.15,
//     },
//   ],
//   daily: [
//     {
//       dt: 1684951200,
//       sunrise: 1684926645,
//       sunset: 1684977332,
//       moonrise: 1684941060,
//       moonset: 1684905480,
//       moon_phase: 0.16,
//       summary: "Expect a day of partly cloudy with rain",
//       temp: {
//         day: 299.03,
//         min: 290.69,
//         max: 300.35,
//         night: 291.45,
//         eve: 297.51,
//         morn: 292.55,
//       },
//       feels_like: {
//         day: 299.21,
//         night: 291.37,
//         eve: 297.86,
//         morn: 292.87,
//       },
//       pressure: 1016,
//       humidity: 59,
//       dew_point: 290.48,
//       wind_speed: 3.98,
//       wind_deg: 76,
//       wind_gust: 8.92,
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: 92,
//       pop: 0.47,
//       rain: 0.15,
//       uvi: 9.23,
//     },
//   ],
//   alerts: [
//     {
//       sender_name:
//         "NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
//       event: "Small Craft Advisory",
//       start: 1684952747,
//       end: 1684988747,
//       description:
//         "...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
//       tags: [],
//     },
//   ],
// };

// const Weather = () => {
//   const [latitude, setLatitude] = useState("31.9913984");
//   const [longitude, setLongitude] = useState("35.9596032");
//   const [locationData, setLocationData] = useState(demo);

//   const fetchData = async () => {
//     try {
//       console.log(latitude);
//       console.log(longitude);
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=5554e7b0dbd700efa074fffd50a0a12d&units=metric`
//       );
//       setLocationData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setLatitude(position.coords.latitude);
//             setLongitude(position.coords.longitude);
//           },
//           (error) => {
//             console.error("Error getting location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     };

//     getLocation();
//   }, []); // Removed locationData, latitude, and longitude from the dependency array

//   useEffect(() => {
//     if (latitude && longitude) {
//       //   fetchData();
//     }
//   }, [latitude, longitude]); // Fetch data when latitude or longitude changes

//   return (
//     <div className="weather-container mb-3">
//       <h3>{demo.timezone}</h3>
//       <h3>Monday 7:00 AM</h3>
//       <i data-feather="cloud-lightning"></i>
//       <h1>{demo.current.temp}°</h1>
//       <h4>So, it's Stormy.</h4>
//       <div className="week-weather">
//         <span>Thu Sep 14</span>
//         <span>29° 13°</span>
//         <span>Fri Sep 15</span>
//         <span>29° 13°</span>
//         <span>Sat Sep 16</span>
//         <span>29° 13°</span>
//       </div>
//     </div>
//   );
// };

const Weather = () => {
  return (
    <Container className=" p-4 weather-card d-flex flex-column gap-5">
      <div className=" text-light d-flex align-items-center justify-content-between">
        <h5>عمان</h5>

        <i class="fa-regular fa-bell"></i>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          style={{ width: "7rem", height: "5rem" }}
          src={process.env.PUBLIC_URL + "/images/cloud.png"}
          alt=""
        />
      </div>
      <div className="weather-details d-flex flex-column align-items-center justify-content-center p-3 gap-2">
        <Row className="text-light">
          <span>{currentDate}</span>
        </Row>
        <Row className="text-light">
          <h1>
            29 <sup>0</sup>
          </h1>
        </Row>
        <Row className="text-light">صافي</Row>
        <Row className="text-light">الرياح | 10كم/ساعة </Row>
        <Row className="text-light">الرطوبة | 54% </Row>
      </div>
    </Container>
  );
};
export default Weather;
