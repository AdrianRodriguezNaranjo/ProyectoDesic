import axios from 'axios';
const endpont = "http://localhost:8080/api/bus_stop";

function getOptionsImages(){
  let options ={
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return options
}

const getAll = (idLine) => {
  return axios.get(endpont+`/${idLine}`,getOptionsImages());
};

const get = id => {
  return axios.get(endpont+'/'+id, getOptionsImages());
};

const create = data => {
  const body = new FormData();
  body.append('Location',data.Location);
  body.append('idLine',data.idLine);
  body.append('file',data.file);

  return axios.post(endpont, body, getOptionsImages());
};

const update = (id, data) => {
  const body = new FormData();
  body.append('Location',data.Location);
  body.append('idLine',data.idLine);
  body.append('file',data.file);

  return axios.put(endpont+'/'+id, body, getOptionsImages());
};

const remove = (id) => {
  console.log(typeof id)
  return axios.delete(endpont+'/'+id);
};

const removeAll = () => {
  return axios.delete(endpont);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
  };