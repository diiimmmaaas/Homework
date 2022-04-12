import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        {props.deleteAffairCallback(props.affair._id)}
    }// need to fix

    return (
        <div className={styles.affair}>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
            <div>{props.affair.name}</div>
            <div>[{props.affair.priority}]</div>
        </div>
    )
}

export default Affair
