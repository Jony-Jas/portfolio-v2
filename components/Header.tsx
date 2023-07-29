"use client";

import styles from "./header.module.css";
import BurgerMenu from "@/public/utils/menu-icon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/appStore";

import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

function Header() {
  const { page: active } = useAppStore();
  const [menuActive, setMenuActive] = useState(false);
  const [transitionActive, setTransitionActive] = useState(true);
  const [position, setPosition] = useState([-50, -50, -50]);

  useEffect(() => {
    if (active == 0) {
      let temp = [-50, -50, -50];
      setPosition([...temp]);
    }
    if (active == 1) {
      let temp = [50, -50, -50];
      setPosition([...temp]);
    }
    if (active == 2) {
      let temp = [50, 50, -50];
      setPosition([...temp]);
    }
    if (active == 3) {
      let temp = [50, 50, 50];
      setPosition([...temp]);
    }
  }, [active]);

  const setMenuStateActive = (state: boolean) => {
    setTransitionActive(false);
    setTimeout(() => {
      setMenuActive(state);
      setTransitionActive(true);
    }, 100);
  };

  return (
    <header className={styles.container}>
      {menuActive ? (
        <motion.div
          animate={{
            y: transitionActive ? 128 : 0,
            opacity: transitionActive ? 1 : 0,
          }}
          initial={{
            y: transitionActive ? 0 : 128,
            opacity: transitionActive ? 0 : 1,
          }}
          className={styles.options}
        >
          <Link
            href="/#home"
            onClick={() => {
              setMenuStateActive(false);
            }}
          >
            <h3 className={styles[active === 0 ? "active" : "inactive"]}>
              Home
            </h3>
          </Link>

          <Link
            href="/#about"
            onClick={() => {
              setMenuStateActive(false);
            }}
          >
            <h3 className={styles[active === 1 ? "active" : "inactive"]}>
              About
            </h3>
          </Link>

          <Link
            href="/#blog"
            onClick={() => {
              setMenuStateActive(false);
            }}
          >
            <h3 className={styles[active === 2 ? "active" : "inactive"]}>
              Blog
            </h3>
          </Link>

          <Link
            href="/#contact"
            onClick={() => {
              setMenuStateActive(false);
            }}
          >
            <h3 className={styles[active === 3 ? "active" : "inactive"]}>
              Contact Me
            </h3>
          </Link>
        </motion.div>
      ) : null}
      <div className={styles.header}>
        <div className={styles.left}>
          <h2>Portfolio</h2>
          <ThemeSwitcher />
        </div>
        <div className={styles.rightMenu}>
          <BurgerMenu
            className={styles.menu}
            onClick={() => {
              setMenuStateActive(!menuActive);
            }}
          />
        </div>
        <nav className={styles.right}>
          <Link href="/#home">
            <h3 className={styles[active === 0 ? "active" : "inactive"]}>
              Home
            </h3>
            {active == 0 ? (
              <motion.hr animate={{ x: 0 }} initial={{ x: position[0] }} />
            ) : null}
          </Link>

          <Link href="/#about">
            <h3 className={styles[active === 1 ? "active" : "inactive"]}>
              About
            </h3>
            {active == 1 ? (
              <motion.hr animate={{ x: 0 }} initial={{ x: position[1] }} />
            ) : null}
          </Link>

          <Link href="/#blog">
            <h3 className={styles[active === 2 ? "active" : "inactive"]}>
              Blog
            </h3>
            {active == 2 ? (
              <motion.hr animate={{ x: 0 }} initial={{ x: position[2] }} />
            ) : null}
          </Link>

          <Button>
            <Link href="/#contact">
              <h3>Contact Me</h3>
              {active == 3 ? (
              <motion.hr animate={{ x: 0 }} initial={{ x: position[2] }} />
            ) : null}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
