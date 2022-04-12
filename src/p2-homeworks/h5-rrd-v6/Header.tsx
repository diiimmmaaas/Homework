import React, {useState} from 'react'
import styles from './Header.module.css'
import Menu from './Menu/Menu';

function Header() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={styles.menu}>
            <nav>
                <div className={styles.burgerBtn} onClick={()=>setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <Menu active={menuActive} setActive={setMenuActive} header={"Menu"}/>

        </div>
    )
}

export default Header
