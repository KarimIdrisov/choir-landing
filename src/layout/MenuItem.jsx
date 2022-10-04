import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {

  const handleAnchorClick = () => {

    const { hash } = window.location;
    const elementToScroll = document.getElementById(hash?.replace("#", ""));

    if (!elementToScroll) {
      return;
    }

    window.scrollTo({
      top: elementToScroll.offsetTop - 80,
      behavior: "smooth"
    });
    window.addEventListener("hashchange", handleAnchorClick);
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
        <Link onClick={handleAnchorClick} to={i.link}>{i.name}</Link>
    </motion.li>
  );
};
