import React from 'react';
import styles from '@/styles/errorpage.module.scss'

function ErrorPage() {
    return (
        <div className={styles.error}>
            <p className={styles.error__text}>
                Я злая страшная ошибка бу-у-у!
            </p>
        </div>
    );
}

export default ErrorPage;