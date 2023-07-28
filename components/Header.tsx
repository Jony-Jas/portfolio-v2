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

  return (
      <header className={styles.container}>
        <motion.div
          animate={{ y: menuActive ? 130 : 0, opacity: menuActive ? 1 : 0 }}
          initial={{ y: menuActive ? 0 : 130, opacity: menuActive ? 0 : 1 }}
          className={styles.options}
        >
          <Link
            href="/#home"
            onClick={() => {
              setActive(0);
              setMenuActive(false);
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
              setMenuActive(false);
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
              setMenuActive(false);
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
              setMenuActive(false);
            }}
          >
            <h3 className={styles[active === 3 ? "active" : "inactive"]}>
              Contact Me
            </h3>
          </Link>
        </motion.div>
        <div className={styles.header}>
          <div className={styles.left}>
            <h2>Portfolio</h2>
            <ThemeSwitcher />
          </div>
          <div className={styles.rightMenu}>
            <BurgerMenu
              className={styles.menu}
              onClick={() => {
                setMenuActive((state) => !state);
              }}
            />
          </div>
          <div className={styles.right}>
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
          </div>
        </div>
      </header>
  );
}

export default Header;
