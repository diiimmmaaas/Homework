import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import styles from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>( state => state.loading.isLoading )
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout( () => {
            dispatch(loadingAC(false))
        }, 5000 )

        console.log('loading...')
    };

    return (
        <div >
            <hr/>
            --homeworks 10--

            {/*should work (должно работать)*/}

            <div className={styles.block}>
                {loading
                    ? (
                        <div className={styles.loader}></div>
                    ) : (
                        <div className={styles.button}>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
