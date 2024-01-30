import FooterScheduleU from "../../../components/components-user/footerSchedule/FooterSchedule";
import HeaderScheduleU from "../../../components/components-user/headerSchedule/HeaderSchedule";
import ScheduleUs from "../../../components/components-user/schedule/Schedule";

function ScheduleU(){

    return(
        <div className='menuBody'>
        <HeaderScheduleU/>
        <ScheduleUs/>
        <FooterScheduleU/>
        </div>
    );
}

export default ScheduleU