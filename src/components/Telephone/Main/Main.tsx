import React, {useEffect} from 'react';
import styles from './main.module.scss'
import {useAppDispatch, useAppSelector} from "@/store/store";
import {pushLife, removeLife} from "@/store/slice/dataReducer";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import CellCard from "@/components/Telephone/Main/CellCard/CellCard";

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
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <main className={styles.main}>
            <TransitionGroup
                component='ul'
                className={styles.main__list}
            >
                {cells.map((i) =>
                    <CSSTransition
                        timeout={500}
                        classNames="fade"
                        key={Math.round(Math.random() * 100000)}
                        unmountOnExit
                        mountOnEnter
                    >
                        <CellCard key={Math.round(Math.random() * 100000)} image={i.image} header={i.header}
                                  description={i.description}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <div className={styles.main__button_content}>
                <button onClick={handlePush} className={styles.main__button_content__button}>
                    Сотворить
                </button>
            </div>
        </main>
    );
}

export default Main;