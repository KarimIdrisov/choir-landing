import React from "react";

import styles from './Footer.module.scss';
import Icons from "../../common/icons";
import { Logo } from "../../components/Logo";

export const Footer = () => {

    const openVk = () => {
        window.open("https://vk.com/fareastchoirolympic", "_blank");
    };

    const openYoutube = () => {
        window.open("https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured", "_blank");
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title}>
                        контакты
                    </div>
                    <div className={styles.links}>
                        <div className={styles.doubleRow}>
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    Художественный руководитель
                                </div>
                                <div className={styles.info}>
                                    Елена Петухова
                                    <br />
                                    <br />
                                    +7 (924) 236 67 03
                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    Менеджер по работе с участниками
                                </div>
                                <div className={styles.info}>
                                    Юлия Новикова
                                    <br />
                                    <br />
                                    +7 (914) 690 57 13
                                </div>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.contactTitle}>
                                Электронная почта
                            </div>
                            <div className={styles.info}>
                                fareastchoir@gmail.com
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.contactTitle}>
                                Социальные сети
                            </div>
                            <div className={styles.info}>
                                <Icons type='vk' className={styles.vk} width={24} height={24} onClick={() => openVk()}/>
                                <Icons type='youtube' className={styles.youtube} width={24} height={24} onClick={() => openYoutube()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <Logo className={styles.choir} />
                    <Icons type='rf' className={styles.rf} width={204} height={71}/>
                </div>
                <div className={styles.copyright}>
                © Дальневосточная хоровая олимпиада, 2023
                </div>
            </div>
        </footer>
    )
};