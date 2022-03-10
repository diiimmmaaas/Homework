import React from 'react'
import classes from "./Message.module.css"

type MessagePropsType = {
    avatar:string
    name:string
    message:string
    time:string

}



function Message(props:MessagePropsType) {
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src={props.avatar} />
                </div>
                <div className={classes.cloud}>
                    <div className={classes.txt}>
                        <p className={classes.name}>{props.name}</p>
                        <p className={classes.message}>{props.message}</p>
                        <span className={classes.timestamp}>{props.time}</span>
                    </div>
                    <div className={classes.cloud_arrow}></div>
                </div>
            </div>
        </>
    )
}

export default Message
