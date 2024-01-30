import "./AddLine.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import LineService from "../../services/linesServices/LineService";
import { useNavigate } from "react-router-dom";
import { Button, notification, Space } from "antd";

const AddLine = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate=useNavigate()
    const initialLineState = {
        id: null,
        number: null,
        firstStop: null,
        lastStop: null,
        published: false
    };
    const [line, setLine] = useState(initialLineState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLine({ ...line, [name]: value });
    };

    const saveLine = () => {
        var data = {
            number: line.number,
            firstStop: line.firstStop,
            lastStop: line.lastStop
    }; 
    const numberD =line.number
    const firstStopD =line.firstStop
    const lastStopD =line.lastStop

    if(numberD === null|| numberD === '' || firstStopD === null || firstStopD === '' || lastStopD === null || lastStopD === ''){
      notification.error({message:'Ha ocurrido un error',description:'Comprueba que todos los campos esten rellenados', duration: 5})
    }else{
    LineService.create(data)
    .then(response => {
      setLine({
        id: response.data.id,
        number: response.data.number,
        firstStop: response.data.firstStop,
        lastStop: response.data.lastStop,
        published: response.data.published
      });
      setSubmitted(true);
      LineService.getAll()
      navigate("/Line")
      // console.log(response.data);
    })
  }
};


return (
  <div>
    <Header/>
    <div className="bodyAddLine">
      <div className="form-group">
        <label htmlFor="number">Número</label>
        <input
          type="number"
          className="form-control"
          id="number"
          required
          value={line.number}
          onChange={handleInputChange}
          name="number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="firstStop">Primera parada</label>
        <input
          type="text"
          className="form-control"
          id="firstStop"
          required
          value={line.firstStop}
          onChange={handleInputChange}
          name="firstStop"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastStop">Ultima parada</label>
        <input
          type="text"
          className="form-control"
          id="lastStop"
          required
          value={line.lastStop}
          onChange={handleInputChange}
          name="lastStop"
        />
      </div>
    
      <Button onClick={saveLine} className="btn btn-success">
        Guardar
      </Button>
      <Button onClick={()=>navigate("/Line")} className="btn-denegade">
        Cancelar
      </Button>
    </div>
    <Footer/>
  </div>
  )}


export default AddLine