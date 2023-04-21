import React from 'react';
import styles from "@/components/Telephone/Main/main.module.scss";
import Image from "next/image";
import {ICellCard} from "@/store/slice/dataReducer";
import {motion} from "framer-motion";

function CellCard(props: ICellCard) {

    const {
        image,
        description,
        header
    } = props

    return (
        <motion.li
            className={styles.main__list__item}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            drag="x"
            layout
            dragConstraints={{left: 0, right: 0}}
        >
            <Image src={image} alt={`${image}`}/>
            <div className={styles.main__list__item__content}>
                <h2 className={styles.main__list__item__content__header}>
                    {header}
                </h2>
                <p className={styles.main__list__item__content__description}>
                    {description}
                </p>
            </div>
        </motion.li>
    );
}

export default CellCard;