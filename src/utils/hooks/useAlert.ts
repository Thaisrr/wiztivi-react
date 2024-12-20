import {Alert} from "../types/Alert.ts";
import {useAppDispatch} from "./useStore.ts";
import {createAlert, removeAlert} from "../../store/AlertSlice.ts";

export const useAlert = () => {
    const dispatch = useAppDispatch();

    return ({text, level = 'info', duration = 5000} : Alert) => {
        const alert = {text, level, duration};
        dispatch(createAlert(alert));

        setTimeout(() => {
            dispatch(removeAlert(alert))
        }, duration)

    }
}