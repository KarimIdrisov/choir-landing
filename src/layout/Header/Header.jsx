import React from "react";
import {useTranslation} from "react-i18next";

import Logo from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

export const Header = () => {

    const { t } = useTranslation();

    const menu = [
        {
            name: 'УСЛОВИЯ УЧАСТИЯ',
            link: '/rules'
        },
        {
            name: 'ПРОГРАММЫ',
            link: '/programms'
        },
        {
            name: 'УЧАСТНИКИ',
            link: '/participants'
        },
        {
            name: 'ЖЮРИ',
            link: '/jury'
        },
        {
            name: 'МЕСТА ПРОВЕДЕНИЯ',
            link: '/venues'
        },
        {
            name: 'НОВОСТИ',
            link: '/news'
        },
        {
            name: 'ФОТО',
            link: '/photos'
        },
        {
            name: 'ВИДЕО',
            link: '/videos'
        },
        {
            name: 'РЕЗУЛЬТАТЫ',
            link: '/results'
        }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt='Logo' width={53} height={64}/>
                <span className={styles.logoText}>
                    {t('header.logoText')}
                </span>
            </div>

            <menu>
                <ul className={styles.menu}>
                    {
                        menu.map(( menuItem ) => (
                            <li key={menuItem.link} className={styles.menuItem}>
                                <Link to={menuItem.link}>
                                    {menuItem.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </menu>
        </header>
    )
};
