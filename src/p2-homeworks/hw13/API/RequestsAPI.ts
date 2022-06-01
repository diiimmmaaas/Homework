import axios from "axios";


export const api = {
    sendCheckboxValue(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})
    }
}

