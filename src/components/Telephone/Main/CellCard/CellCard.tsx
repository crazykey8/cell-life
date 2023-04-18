import React from 'react';
import styles from "@/components/Telephone/Main/main.module.scss";
import Image from "next/image";
import {ICellCard} from "@/store/slice/dataReducer";

function CellCard(props: ICellCard) {

    const {
        image,
        description,
        header
    } = props

    return (
        <li className={styles.main__list__item}>
            <Image src={image} alt={`${image}`}/>
            <div className={styles.main__list__item__content}>
                <h2 className={styles.main__list__item__content__header}>
                    {header}
                </h2>
                <p className={styles.main__list__item__content__description}>
                    {description}
                </p>
            </div>
        </li>
    );
}

export default CellCard;