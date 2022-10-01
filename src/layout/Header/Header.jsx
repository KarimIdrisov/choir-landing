import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useCycle } from "framer-motion";

import Logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../common/useDimensions";
import { MenuItem } from "../MenuItem";

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
      name: "УСЛОВИЯ УЧАСТИЯ",
      link: "#rules",
    },
    {
      name: "ПРОГРАММЫ",
      link: "#programms",
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
      link: "/photos",
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
  
const Navigation = () => (
    <motion.ul variants={variants} className={styles.mobuleUl}>
      {menu.map(i => (
        <MenuItem i={i} key={i.link} />
      ))}
    </motion.ul>
  );


export const Header = () => {
  const { t } = useTranslation();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

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
              <Link to={menuItem.link}>{menuItem.name}</Link>
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
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
      </menu>
    </header>
  );
};
