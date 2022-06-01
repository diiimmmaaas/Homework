import React, {useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { api } from "../API/RequestsAPI";
import styles from './Request.module.css'

function Request() {

    const [checked, setChecked] = useState<boolean>(false)
    const [text, setText] = useState<string>('Тут будет ответ от сервера...')

    const onSendValue = () => {
        api.sendCheckboxValue(checked)
            .then((res) => {
                console.log(res.data.errorText)
                setText(res.data.errorText)
            })
            .catch((e) => {
                console.log({...e});
                console.log(e.response ? e.response.data.errorText : e.message);
                setText(e.response.data.errorText)
            })
    }

    const onChangeChecked = (checked: boolean) => {
        setChecked(checked)
    }

    return (
        <div className={styles.block}>
            <div>{text && text}</div>
            <div>
                <SuperButton onClick={onSendValue}>
                    SEND
                </SuperButton>
                <SuperCheckbox onChangeChecked={onChangeChecked}/>
            </div>
        </div>
    );
}

export default Request;
