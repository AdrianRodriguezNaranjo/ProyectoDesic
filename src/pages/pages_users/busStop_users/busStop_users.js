import BusStopUs from "../../../components/components-user/busStop/BusStop";
import FooterBusStopU from "../../../components/components-user/footerBusStop/FooterBusStop";
import HeaderBusStopU from "../../../components/components-user/headerBusStop/HeaderBusStop";



function BusStopU(){

    return(
        <div className='menuBody'>
        <HeaderBusStopU/>
        <BusStopUs/>
        <FooterBusStopU/>
        </div>
    );
}

export default BusStopU