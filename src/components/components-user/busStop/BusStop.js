import './BusStop.css';
import { useParams } from "react-router-dom"
import BusStopService from "../../../services/busStopService/BusStopService"
import React, { useState, useEffect } from "react";

const BusStopUs = () => {
  const [busStop, setBusStop] = useState([]);

  const { idLine } = useParams();


  useEffect(() => {
    retrieveBusStop();
  }, []);

  const retrieveBusStop = () => {
    BusStopService.getAll(idLine)
      .then(response => {
        setBusStop(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      {busStop.map((b, index) => {
        return (
          <div key={index} className="elementBody">
            <h3>Paradas</h3>
            <p>Localizacion: {b.Location}</p>
            <img src={`http://localhost:8080/images/${b.filename}`}></img>
          </div>
        )
      })}
    </div>
  )
}

export default BusStopUs