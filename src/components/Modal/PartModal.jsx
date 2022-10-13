import React, {useRef} from 'react';
import Popup from 'reactjs-popup';
import styles from "../../pages/Home/Home.module.scss";
import {LazyImage} from "../LazyImage/LazyImage";

export const ControlledRefModalPart = ({ item }) => {
    const ref = useRef();
    const openTooltip = () => ref.current.open();
    const closeTooltip = () => ref.current.close();
    const toggleTooltip = () => ref.current.toggle();

    return (
        <Popup key={item.long} ref={ref} trigger={
            <div  className={styles.participantCard}>
                <LazyImage src={item.image}
                           alt={item.short}
                           className={styles.participantImage}
                           width={380}
                           height={300} />

                <div className={styles.participantTitle}>
                    {item.short}
                </div>
            </div>
        } modal>
            <div className={styles.participantModal}>
                <button className={styles.closeButton} onClick={closeTooltip}>
                    X
                </button>
                <img
                    src={item.image}
                    alt={item.short}
                    className={styles.participantModalImage}
                    width={600}
                    height={400}
                />
                <div className={styles.participantModalDesc}>
                    {item.bio}
                </div>
            </div>
        </Popup>
    );
};