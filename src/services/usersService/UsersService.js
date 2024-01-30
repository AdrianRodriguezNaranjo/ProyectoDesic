import axios from "axios";
const endpoint = "http://localhost:8080/api/users";


const getOptions=(token)=>{

    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'Authorization' : bearerAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
    };

    return options;
  }

const getAll = () =>{
    return axios.get(endpoint)
};

const get = (id,token) => {
    let myOptions = getOptions(token);
    return axios.get(endpoint+'/'+id, myOptions);
};

const create = data => {
    return axios.post(endpoint,data);
};

const update = (id, data)=> {
    return axios.put(endpoint+'/'+id, data);
};

const remove = (id) => {
    return axios.delete(endpoint+'/'+id);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
  };