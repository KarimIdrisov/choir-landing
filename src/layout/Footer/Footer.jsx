import React from "react";

import styles from './Footer.module.scss';
import vkLogo from "../../assets/icons/vk-logo.svg";
import youtubeLogo from "../../assets/icons/youtube.svg";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                    <span>
                        Контакты
                    </span>
                <span>
                    +7 999 999 99 99
                </span>
                <span>
                    test@gmail.com
                </span>

            </div>

            <div className={styles.links}>
                <img
                    className={styles.vk}
                    src={vkLogo}
                    alt="Группа олимпиады во вконтакте"
                    width={84}
                    height={84}
                />
                <img
                    className={styles.youtube}
                    src={youtubeLogo}
                    alt="Канал олимпиады на ютубе"
                    width={84}
                    height={84}
                />
            </div>
        </footer>
    )
};