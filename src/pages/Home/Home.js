import React, { useEffect, useState } from "react";
import {withLayout} from "../../layout/Layout";

import styles from './Home.module.scss';
import dayjs from 'dayjs';
import { ms } from "../../common/ms";
import Timer from "../../components/Timer/Timer";


const Home = () => {

    const [time, setTime] = useState(+new Date(2022, 10, 25) - +new Date())
    
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(+new Date(2022, 10, 25) - +new Date());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className={styles.intro}>

            </div>
            <div className={styles.timer}>
                <div className={styles.text}>
                    ДО НАЧАЛА <br/>
                    ОСТАЛОСЬ
                </div>
                <div className={styles.time}>
                    <Timer time={time} />
                </div>
            </div>
        </div>
    )
};

export default withLayout(Home);