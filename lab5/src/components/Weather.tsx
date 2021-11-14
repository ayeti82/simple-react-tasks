import React from "react";
import "./Style.css";

interface WeatherProps {}

const Weather: React.FC<WeatherProps> = () => {
  //getCurrentTime
  const getCurrentTime = (
    results: string,
    seconds: number,
    shouldFail: boolean
  ) => {
    return new Promise((resolve, reject) => {
      if (shouldFail) {
        reject(Error("Rejected!"));
      }
      setTimeout(() => {
        resolve(results);
      }, seconds);
    });
  };
  //getMyLocation
  const getMyLocation = (results: string, seconds: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(results);
      }, seconds);
    });
  };
  //getWeatherFromMeteo
  const getWeatherFromMeteo = () => {
    console.log("Enter getWeatherFromMeteo");
    return Promise.all([
      getCurrentTime("From Meteo Time", 20000, false),
      getMyLocation("From Meteo Location", 20000),
    ])
      .then((values) => {
        console.log(values);
        return values;
      })
      .catch((error) => {
        console.error(error);
        return "Meteo " + error;
      });
  };
  //getWeatherFromOnet
  const getWeatherFromOnet = () => {
    console.log("Enter getWeatherFromOnet");
    return Promise.all([
      getCurrentTime("From Onet Time", 2000, false),
      getMyLocation("From Onet Location", 2000),
    ])
      .then((values) => {
        console.log(values);
        return values;
      })
      .catch((error) => {
        console.error(error);
        return "Onet " + error;
      });
  };
  //getWeatherFromGoogle
  const getWeatherFromGoogle = () => {
    console.log("Enter getWeatherFromGoogle");
    return Promise.all([
      getCurrentTime("From Google Time", 0, true),
      getMyLocation("From Google Location", 0),
    ])
      .then((values) => {
        console.log(values);
        return values;
      })
      .catch((error) => {
        console.error(error);
        return "Google " + error;
      });
  };
  //canIGoOut
  const canIGoOutNow = () => {
    console.log("Enter canIGoOut");
    Promise.any([
      getWeatherFromMeteo(),
      getWeatherFromOnet(),
      getWeatherFromGoogle(),
    ]).then((value) => {
      console.log("Final Result " + value);
    });
    console.log("Exit canIGoOut");
  };

  //return
  return (
    <div className="container">
      <h1>Can I go out now?</h1>
      <input
        type="button"
        value="Click here"
        className="buttonStyle"
        onClick={canIGoOutNow}
      />
    </div>
  );
};

export default Weather;
