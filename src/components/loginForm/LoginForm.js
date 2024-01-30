import "./LoginForm.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../../services/usersService/UsersService";
import AuthService from "../../services/usersService/AuthService";
import { RolesContext } from "../../context/roles";

const  LoginForm = () => {
  const navigate=useNavigate()
  const rolesContext=useContext(RolesContext)

  const initialUserState = {
    id: null,
    name: "",
    username: "",
    password: "",
    discriminator: "user",
    published: false
};
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

const handleInputChange = event => {
  const { name, value } = event.target;
  setUser({ ...user, [name]: value });
};

const login=()=>{
    var data = {
        name: user.name,
        username: user.username,
        password: user.password,
        discriminator: user.discriminator
}; 

AuthService.login(data)
.then(response => {
  setUser({
    // id: response.data.id,
    // name: response.data.name,
    username: response.data.username,
    password: response.data.password,
    published: response.data.published
  });
  setSubmitted(true);
  // UsersService.getAll()
  rolesContext.role=response.data.user.discriminator
  console.log(rolesContext, response.data.user.discriminator)
  window.location.reload();
})
};

return (
    <div className="bodyLogin">
      <div className="form-group-first">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          id="username"
          required
          value={user.username}
          onChange={handleInputChange}
          name="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={user.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>

      <button onClick={login} className="btn btn-success">
        Iniciar Sesion
      </button>
    </div>
  )};

  export default LoginForm