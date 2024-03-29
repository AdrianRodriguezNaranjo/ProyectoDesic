import "./ListLine.css";
import addbutton from "../../assets//icons/addbutton.svg";
import React, { useState, useEffect } from "react";
import LineService from "../../services/linesServices/LineService";
import { useNavigate } from "react-router-dom";
import { Button, message, Popconfirm} from 'antd';
const LineList = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    retrieveLines();
  }, []);

  const confirm = (id) => {
    console.log(id);
    message.success('Se ha eliminado');
    deleteLine(id)
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Cancelado');
  };

  const retrieveLines = () => {
    LineService.getAll()
      .then(response => {
        setLines(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


const deleteLine =(id)=>{
  LineService.remove(id).then(response=>{
    retrieveLines();
  })
  LineService.getAll()
}

const updateLine=(l)=>{
  localStorage.setItem("linea",JSON.stringify(l))
  navigate("/update")
}

  return (
    <div className="listBody">
      {lines.map((l,index)=>{
        return(
          <div key={index} className="elementBody" >
            <div className="buttonSchedule" onClick={()=>navigate(`/Line/${l.id}/schedule`)}>
            <h3>línea:{l.number}</h3>
            <p>{l.firstStop} - {l.lastStop}</p>
            </div>
            <Popconfirm
              title="Eliminar Linea"
              description="Estas seguro de que quieres eliminar esta linea?"
              onConfirm={() => confirm(l.id)}
              onCancel={() => cancel()}
              okText="Si"
              cancelText="No">
            <Button className="delButton">Eliminar</Button>
            </Popconfirm>
            <Button onClick={()=>updateLine(l)} className="updButton">Actualizar</Button>
          </div>
        )
      })}

      <img src={addbutton} alt="Añadir" onClick={()=>navigate("/addLine")} className="buttonAdd"/>
    </div>
  );
};

export default LineList