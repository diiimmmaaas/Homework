import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


function HW12() {
    const themes = useSelector<AppStoreType, string[]>( state => state.theme.themes )
    const currentTheme = useSelector<AppStoreType, string>( state => state.theme.currentTheme )
    const dispatch = useDispatch()


    const onChangeCallback = (newTheme: string) => {
        dispatch(changeThemeC(newTheme))
    }

    return (
        <div className={s[currentTheme]}>
            <hr/>
            <span className={s[currentTheme + '-text']}>
                --homeworks 12--
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={currentTheme}
                onChangeOption={onChangeCallback}
            />
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
