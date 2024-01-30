import { useContext, useEffect } from "react";
import LoginForm from "../../../components/loginForm/LoginForm";
import AuthService from "../../../services/usersService/AuthService";
import { RolesContext } from "../../../context/roles";
import { useNavigate } from "react-router-dom";

function Login() {

  const logged = AuthService.isLoggedIn();
  const rolesContext = useContext(RolesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(logged){
      AuthService.navigateByRole(rolesContext.role, navigate);
    }
  },[])


  if(logged){
    return(
    <>
      <h1>CARGANDO...</h1>
    </>
    );
  }

  return (
    <>
      <LoginForm />
    </>
  );
}

export default Login