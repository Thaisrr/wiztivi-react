import {Alert} from "../utils/types/Alert.ts";
import {useAppSelector} from "../utils/hooks/useStore.ts";
import '../styles/Alert.css';

const AlertCard = (alert: Alert) => (
    <div className={`alert ${alert.level}`} role='alert'>
        {alert.text}
    </div>
)

const AlertContainer = () => {
    const alerts: Alert[]= useAppSelector(state => state.alert);

    return (
        <>
            {alerts?.length ? (
                <div className='alert-container'>
                    {alerts.map((a, i) => <AlertCard {...a} key={a.text + i} />) }
                </div>
            ) : null}
        </>
    )
}
export default AlertContainer;