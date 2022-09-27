import React from "react";
import {useTranslation} from "react-i18next";

import Logo from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {

    const { t } = useTranslation();

    const menu = [
        {
            name: ''
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt='Logo' width={53} height={64}/>
                <span className={styles.logoText}>
                    {t('header.logoText')}
                </span>
            </div>

        </header>
    )
};
