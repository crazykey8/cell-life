import React, {useEffect, useState} from 'react';
import BatterySvg from "@/icons/batterySvg";
import CelluralSvg from "@/icons/celluralSvg";
import WifiSvg from "@/icons/wifiSvg";
import styles from './header.module.scss'
import moment from "moment";

function Header() {

    moment().locale('ru')

    const [time, setTime] = useState(moment().format('HH:mm'))

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format('HH:mm'))
        }, 1000)
    }, [])

    return (
        <header className={styles.header}>
            <ul className={styles.header__list}>
                <li className={styles.header__list__item}><BatterySvg/></li>
                <li className={styles.header__list__item}><CelluralSvg/></li>
                <li className={styles.header__list__item}><WifiSvg/></li>
                <li className={styles.header__list__item}>
                    {time}
                </li>
            </ul>
            <h1 className={styles.header__header}>
                Клеточое наполнение
            </h1>
        </header>
    );
}

export default Header;