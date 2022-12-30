import React, { useState, useEffect } from "react";
import WeatherNewItem from "./WeatherNewItem";

const WeatherNew = (props) => {
  const [search, setSearch] = useState("howrah");
  const [apiData, setApiData] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const apiId = "5855519da22776d61a37c379c2736a2b";
    const fetchData = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiId}&units=metric`
      );
      const data = await res.json();
      //   console.log(data);
      if (res.ok) {
        setApiData(data);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#10102a" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
       >
        <div className="mx-5 my-3">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Enter your city For Example : Howrah"
            onChange={handleOnChange}
            value={search}
          />
        </div>

        {apiData ? (
          <WeatherNewItem
            city={apiData.name}
            temp={apiData.main.temp}
            feelslike={apiData.main.feels_like}
            icon={apiData.weather[0].icon}
            mode = {props.mode}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WeatherNew;
