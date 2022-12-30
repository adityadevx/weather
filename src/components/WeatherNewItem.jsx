import React from "react";

const WeatherNewItem = (props) => {
 
  const newStyle = {
    color: "white",
    backgroundColor: "#0c1e39",
      boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center mt-5 h-50"
        style={{
          backgroundColor: props.mode === "dark" ? "#10102a" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        {" "}
        <div
          className="card col-md-6 shadowcss"
          // style={{
          //   backgroundColor: props.mode === "dark" ? "#10102a" : "white",
          //   color: props.mode === "dark" ? "white" : "black",
          // }}

          style={props.mode === "dark" ? newStyle : {}}
        >
          <div
            className="card-body text-center"
           
          >
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}.png`}
              className="card-img-top"
              alt="Image Not Found"
            />
            <h5 className="card-title">City : {props.city}</h5>
            <h5 className="card-title">Temp : {props.temp} &#8451;</h5>
            <h5 className="card-title">
              Feels Like : {props.feelslike} &#8451;
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherNewItem;
