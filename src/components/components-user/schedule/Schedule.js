import './Schedule.css';
import { useParams } from "react-router-dom"
import ScheduleService from "../../../services/scheduleService/ScheduleService"
import React, { useState, useEffect } from "react";

const ScheduleUs = () => {
  const [schedules, setSchedule] = useState([]);

  const { idLine } = useParams();

  useEffect(() => {
    retrieveSchedule();
  }, []);

  const retrieveSchedule = () => {
    ScheduleService.getAll(idLine)
      .then(response => {
        setSchedule(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="container">
      {schedules.map((s, index) => {
        return (
          <div key={index} className="elementBody">
            <h3>Horas de salida</h3>
            <p>{s.HourAndMinutes}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ScheduleUs