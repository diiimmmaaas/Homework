import React from 'react'
import styles from './Alternative.module.css'

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={styles.messageWrapper}>
            <div className={styles.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={styles.messageBox}>
                <div className={styles.text}>
                    <div className={styles.name}>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div className={styles.timeBox}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
