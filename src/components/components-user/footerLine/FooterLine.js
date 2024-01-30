import './FooterLine.css'
import user from '../../../assets/icons/user.svg';
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from 'antd';
import AuthService from '../../../services/usersService/AuthService';

function FooterLineU() {

  const navigate = useNavigate()

  const confirm = () => {
    message.success('Se ha cerrado sesion');
    AuthService.logout()
    window.location.reload();
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Cancelado');
  };

  return (
    <div className="bodyFooter">
      <Popconfirm
        title="Cerrar sesion"
        description="Estas seguro que quieres Cerrar sesion?"
        onConfirm={() => confirm()}
        onCancel={() => cancel()}
        okText="Si"
        cancelText="No">
        <div className="user">
          <img src={user} alt="Usuario" />
          <p>Usuario</p>
        </div>
      </Popconfirm>
    </div>
  );
}

export default FooterLineU