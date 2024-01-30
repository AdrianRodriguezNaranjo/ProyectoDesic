import React from "react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useContext } from 'react';
import AuthService from "./services/usersService/AuthService";
import { RolesContext } from "./context/roles";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import UpdateLine from './components/updateLine/UpdateLine';
import AddLine from './components/addLine/AddLine';
import Home from './pages/home/Home';
import Lines from "./pages/lines/Lines";
import Register from './pages/auth/register/Registe';
import Login from './pages/auth/login/Login';
import RegisterOrLogin from './components/registreOrLogin/RegistreOrLogin';
import Schedule from "./pages/schedule/Schedule";
import AddSchedule from "./components/scheduleAdd/ScheduleAdd";
import UpdateSchedule from "./components/scheduleUpdate/ScheduleUpdate";
import BusStopList from "./components/busStopList/BusStopList";
import AddBusStop from "./components/busStopAdd/BusStopAdd";
import UpdateBusStop from "./components/busStopUpdate/BusStopUpdate";
import BusStop from "./pages/busStop/BusStop";
import LinesU from "./pages/pages_users/lines_users/lines_users";
import ScheduleU from "./pages/pages_users/schedule_users/schedule_users";
import BusStopU from "./pages/pages_users/busStop_users/busStop_users";

function App() {

  const logged = AuthService.isLoggedIn();
  const roles = useContext(RolesContext);


  if (logged) {
    const newRole = AuthService.getMyRole();
    roles.role = newRole
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterOrLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute permittedRole='administrator' logged={logged} />}>
          <Route path="/Line" element={<Lines />} />
          <Route path='/Line/:idLine/schedule' element={<Schedule />} />
          <Route path="/Line/:idLine/addSchedule" element={<AddSchedule />} />
          <Route path="/Line/:idLine/updateSchedule" element={<UpdateSchedule />} />
          <Route path="/Line/:idLine/BusStop" element={<BusStop />} />
          <Route path="/Line/:idLine/addBusStop" element={<AddBusStop />} />
          <Route path="/Line/:idLine/updateBusStop" element={<UpdateBusStop />} />
          <Route path="/addLine" element={<AddLine />} />
          <Route path="/update" element={<UpdateLine />} />
        </Route>
        <Route element={<PrivateRoute permittedRole='user' logged={logged} />}>
          <Route path="/user/Line" element={<LinesU />} />
          <Route path="/user/Line/:idLine/Schedule" element={<ScheduleU />} />
          <Route path="/user/Line/:idLine/BusStop" element={<BusStopU />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path="/" element={<RegisterOrLogin />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <PrivateRoute path="/home" element={<Home/>}allowedRoles={['administrator']}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add" element={<AddLine />}/>
        <Route path="/update" element={<UpdateLine />}/> */}