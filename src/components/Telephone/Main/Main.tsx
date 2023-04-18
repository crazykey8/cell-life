import React, {useEffect} from 'react';
import styles from './main.module.scss'
import CellCard from "@/components/Telephone/Main/CellCard/CellCard";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {pushLife, removeLife} from "@/store/slice/dataReducer";

function Main() {
    const cells = useAppSelector(state => state.data.stats)

    const dispatch = useAppDispatch()

    function handlePush() {
        if (cells.length === 5) {
            dispatch(removeLife())
            dispatch(pushLife())
            return
        }
        dispatch(pushLife())
    }

    useEffect(() => {
        dispatch(removeLife())
    }, [])

    return (
        <main className={styles.main}>
            <ul className={styles.main__list}>
                {cells.map((i) =>
                    <CellCard key={Math.round(Math.random() * 100000)} image={i.image} header={i.header}
                              description={i.description}/>
                )}
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