import React, {useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import { motion, useCycle } from "framer-motion";

import Logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../common/useDimensions";
import { MenuItem } from "../MenuItem";
import classNames from "classnames";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 95% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

const menu = [
    {
      name: "ВОЗМОЖНОСТИ УЧАСТИЯ",
      link: "#rules",
    },
    {
      name: "ПРОГРАММЫ",
      link: "#program",
    },
    {
      name: "УЧАСТНИКИ",
      link: "#participants",
    },
    {
      name: "ЖЮРИ",
      link: "#jury",
    },
    {
      name: "МЕСТА ПРОВЕДЕНИЯ",
      link: "#venues",
    },
    {
      name: "НОВОСТИ",
      link: "#news",
    },
    {
      name: "ФОТО",
      link: "#photos",
    },
    {
      name: "ВИДЕО",
      link: "#videos",
    },
    {
      name: "РЕЗУЛЬТАТЫ",
      link: "#results",
    },
  ];
  
const Navigation = ({ toggleOpen, open }) => (
    <motion.ul variants={variants} className={classNames(styles.mobileUl, {
        [styles.under]: !open
    })}>
      {menu.map(i => (
        <div onClick={() => toggleOpen()} key={i.link}>
          <MenuItem i={i} key={i.link} />
        </div>
      ))}
    </motion.ul>
  );


export const Header = () => {
  const { t } = useTranslation();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleAnchorClick = (hash) => {

    const elementToScroll = document.getElementById(hash?.replace("#", ""));

    if (!elementToScroll) {
      return;
    }

    window.scrollTo({
      top: elementToScroll.offsetTop - 100,
      behavior: "smooth"
    });
    window.addEventListener("hashchange", handleAnchorClick);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" width={53} height={64} />
        <span className={styles.logoText}>{t("header.logoText")}</span>
      </div>

      <menu>
        <ul className={styles.menu}>
          {menu.map((menuItem) => (
            <li key={menuItem.link} className={styles.menuItem}>
              <Link onClick={() => handleAnchorClick(menuItem.link)} to={menuItem.link}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <motion.nav
            initial={false}
            className={styles.mobileNav}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className={classNames("background", {
                [styles.over]: isOpen
            })} variants={sidebar} />
            <Navigation toggleOpen={toggleOpen} open={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
      </menu>
    </header>
  );
};
