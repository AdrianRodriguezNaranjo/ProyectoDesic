import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const endpoint = "http://localhost:8080/api/users";

const getOptions = (user) => {
  let base64UserAndPassword = window.btoa(user.username + ":" + user.password);

  let basicAccess = 'Basic ' + base64UserAndPassword;

  let options = {
    headers: {
      'Authorization': basicAccess,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };

  return options;
}

function setTokenOptions() {
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  return options;
}

const register = async (user) => {
  try {
    const body = new URLSearchParams();
    body.append('name', user.name);
    body.append('discriminator', user.discriminator);
    const response = await axios.post(endpoint, body, getOptions(user));
    const token = await response.data.access_token;
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    console.log(err.message)
  }
};

const login = async (user) => {
  try {
    const log = await axios.post(endpoint + '/signin', null, getOptions(user));
    const response = await axios.post(endpoint, null, getOptions(user));
    const token = await response.data.access_token;
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    console.log(err.message);
  }


};

async function logout() {
  await localStorage.removeItem("token");
}

export function getMyRole() {
  const token = localStorage.getItem("token")
  const tokenMas = jwtDecode(token)
  return tokenMas.discriminator
}

const isLoggedIn = ()=> {
  const token = localStorage.getItem("token")
  if (token) {
    return true
  }
  else {
    return false
  }
}

const navigateByRole = (role, navigate) => {
  switch (role) {
    case 'administrator':
      navigate('/Line');
      break;
    case 'user':
      navigate('/user/line');
      break;
    default:
      navigate('/')
      break;
  }
}

export default {
  register,
  login,
  logout,
  isLoggedIn,
  getMyRole,
  navigateByRole
};