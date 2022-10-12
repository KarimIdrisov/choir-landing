import React from "react";

import styles from './Footer.module.scss';
import vkLogo from "../../assets/icons/vk-logo.svg";
import youtubeLogo from "../../assets/icons/youtube.svg";

export const Footer = () => {

    const openVk = () => {
        window.open("https://vk.com/fareastchoirolympic", "_blank");
      };
    
      const openYoutube = () => {
        window.open("https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured", "_blank");
      };

    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                    <span>
                        Контакты
                    </span>
                <span>
                    Художественный руководитель – Елена Петухова
                </span>
                <span>
                    +79242366703
                </span>
                <span>
                    Менеджер по работе с участниками – Юлия Новикова
                </span>
                <span>
                    +79146905713
                </span>
                <span>
                    fareastchoir@gmail.com
                </span>
            </div>

            <div className={styles.links}>
                <img
                    className={styles.vk}
                    src={vkLogo}
                    alt="Группа олимпиады во вконтакте"
                    width={84}
                    height={84}
                    onClick={openVk}
                />
                <img
                    className={styles.youtube}
                    src={youtubeLogo}
                    alt="Канал олимпиады на ютубе"
                    width={84}
                    height={84}
                    onClick={openYoutube}
                />
            </div>
        </footer>
    )
};