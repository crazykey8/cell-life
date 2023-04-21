import React, {useEffect} from 'react';
import styles from './main.module.scss'
import {useAppDispatch, useAppSelector} from "@/store/store";
import {pushLife, removeLife} from "@/store/slice/dataReducer";
import CellCard from "@/components/Telephone/Main/CellCard/CellCard";
import {AnimatePresence} from "framer-motion";

function Main() {
    const cells = useAppSelector(state => state.data.stats)

    const dispatch = useAppDispatch()

    function handlePush() {
        if (cells.length === 5) {
            dispatch(removeLife())
        } else {
            dispatch(pushLife())
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(removeLife())
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <main className={styles.main}>
            <ul className={styles.main__list}>
                <AnimatePresence>
                    {cells.map((i) =>
                        <CellCard key={Math.round(Math.random() * 100000)} image={i.image} header={i.header}
                                  description={i.description}
                        />
                    )}
                </AnimatePresence>
            </ul>
            <div className={styles.main__button_content}>
                <button onClick={handlePush} className={styles.main__button_content__button}>
                    Сотворить
                </button>
            </div>
        </main>
    );
}

export default Main;