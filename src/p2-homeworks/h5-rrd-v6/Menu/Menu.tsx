import React from 'react';
import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";

export type MenuPropsType = {
    header: string
    active: boolean
    setActive: (active: boolean) => void
}

const Menu = (props:MenuPropsType) => {
    return (
        <div className={props.active ? styles.active: styles.menu} onClick={()=> props.setActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.menuContent} onClick={e => e.stopPropagation()}>
                <div className={styles.menuHeader}>{props.header}</div>
                <ul>
                    <li><NavLink to='/pre-junior'>pre-junior</NavLink></li>
                    <li><NavLink to='/junior'>junior</NavLink></li>
                    <li><NavLink to='/junior+'>junior+</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;