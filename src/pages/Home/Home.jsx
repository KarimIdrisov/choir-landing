import React, { useEffect, useState } from "react";
import {withLayout} from "../../layout/Layout";

import styles from './Home.module.scss';
import Timer from "../../components/Timer/Timer";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {MapRU} from "../../components/Map/MapRu";

// TODO: connect i18n
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
            <div className={styles.introSection}>
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
            <div className={styles.about}>
                <span className={styles.title}>
                    ПЕРВАЯ ХОРОВАЯ ОЛИМПИАДА НА ДАЛЬНЕМ ВОСТОКЕ
                </span>

                <span className={styles.description}>
                    Первая Дальневосточная хоровая олимпиада обещает стать <br/>
                    крупнейшим событием в хоровой жизни Дальнего Востока. <br />
                    Мы вместе можем принять участие в формировании нового <br/>
                    фестиваля, найти новых друзей среди участников хоров со всей <br/>
                    страны, сделать хоровую музыку ближе и понятнее для зрителей, <br/>
                    получить массу, ярких впечатлений и открыть для себя что-то новое!
                </span>
            </div>
            <div className={styles.rules}>
                <span className={styles.title}>
                    УСЛОВИЯ УЧАСТИЯ
                </span>

                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                КОНКУРС
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ФЕСТИВАЛЬ
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                МАСТЕР-КЛАССЫ
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={styles.program}>
                <div className={styles.programTitle}>
                    ПРОГРАММА МЕРОПРИЯТИЯ
                </div>
                <div className={styles.programLink}>
                    <img alt='календарь' />

                    <div className={styles.downloadProgram}>
                        <img alt='pgd logo' />
                        СКАЧАТЬ ПРОГРАММУ
                    </div>
                </div>
            </div>
            <div className={styles.partitcipants}>
                <MapRU />
            </div>
            <div className={styles.jury}>
                <div className={styles.juryItem}>
                    <img alt='photo' />
                    <span className={styles.juryName}>
                        СЕРГЕЙ <br/> ЕКИМОВ
                    </span>
                </div>
                <div className={styles.juryItem}>
                    <img alt='photo' />
                    <span className={styles.juryName}>
                        АЛЕКСАНДР <br/> СОЛОВЬЕВ
                    </span>
                </div>
                <div className={styles.juryItem}>
                    <img alt='photo' />
                    <span className={styles.juryName}>
                        НАТАЛЬЯ <br/> БРЫЗЖИНА
                    </span>
                </div>
                <div className={styles.juryItem}>
                    <img alt='photo' />
                    <span className={styles.juryName}>
                        ВЛАДИМЕР <br/> СИНЕНКО
                    </span>
                </div>
                <div className={styles.juryItem}>
                    <img alt='photo' />
                    <span className={styles.juryName}>
                        ЛАРИСА <br/> ШВЕЙКОВСКАЯ
                    </span>
                </div>
            </div>
        </div>
    )
};

export default withLayout(Home);