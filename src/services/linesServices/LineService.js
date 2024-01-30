import axios from 'axios';
const endpont = "http://localhost:8080/api/line";

const getAll = () => {
  return axios.get(endpont);
};

const get = id => {
  return axios.get(endpont+'/'+id);
};

const create = data => {
  return axios.post(endpont, data);
};

const update = (id, data) => {
  return axios.put(endpont+'/'+id, data);
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