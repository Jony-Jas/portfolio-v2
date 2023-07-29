"use client";

import styles from "./header.module.css";
import BurgerMenu from "@/public/utils/menu-icon.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

function Header() {
  const [active, setActive] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [transitionActive, setTransitionActive] = useState(true);

  const setMenuStateActive = (state:boolean)=>{
    setTransitionActive(false);
    setTimeout(()=>{
      setMenuActive(state);
      setTransitionActive(true);
    },100);
  }

  return (
      <header className={styles.container}>
        {
          menuActive ? 
          <motion.div
            animate={{ y: transitionActive ? 128 : 0, opacity: transitionActive ? 1 : 0 }}
            initial={{ y: transitionActive ? 0 : 128, opacity: transitionActive ? 0 : 1 }}
            className={styles.options}
          >
            <Link
              href="/#home"
              onClick={() => {
                setActive(0);
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
                setActive(1);
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
                setActive(2);
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
                setActive(3);
                setMenuStateActive(false);
              }}
            >
              <h3 className={styles[active === 3 ? "active" : "inactive"]}>
                Contact Me
              </h3>
            </Link>
          </motion.div> : null
        }
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
            <Link
              href="/#home"
              onClick={() => {
                setActive(0);
              }}
            >
              <h3 className={styles[active === 0 ? "active" : "inactive"]}>
                Home
              </h3>
            </Link>

            <Link
              href="/#about"
              onClick={() => {
                setActive(1);
              }}
            >
              <h3 className={styles[active === 1 ? "active" : "inactive"]}>
                About
              </h3>
            </Link>

            <Link
              href="/#blog"
              onClick={() => {
                setActive(2);
              }}
            >
              <h3 className={styles[active === 2 ? "active" : "inactive"]}>
                Blog
              </h3>
            </Link>

            <Button>
              <Link
                href="/#contact"
                onClick={() => {
                  setActive(3);
                }}
              >
                <h3>Contact Me</h3>
              </Link>
            </Button>
          </nav>
        </div>
      </header>
  );
}

export default Header;
