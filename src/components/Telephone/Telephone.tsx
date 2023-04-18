import React from 'react';
import styles from './telephone.module.scss'

function Telephone({children}: { children: React.ReactNode }) {

    return (
        <div className={styles.smart}>
            <div className={styles.smart__dettaglio}>
                <div className={styles.smart__dettaglio__sensore}/>
                <div className={styles.smart__dettaglio__microfono}/>
            </div>
            <div className={styles.smart__acenzionebutton}/>
            <div className={styles.smart__volumesu}/>
            <div className={styles.smart__volumegiu}/>
            <div className={styles.smart__schermo}>
                <div className={styles.smart__schermo__frameposizione}>
                    {children}
                </div>
            </div>
            <div className={styles.smart__bottone}/>
        </div>
    );
}

export default Telephone;