"use client";

import styles from "./home.module.css";
import {motion} from "framer-motion";

function HomeSection() {
  return (
    <section className={styles.container} id="home">
      <motion.div
        animate={{x:500,y:500}}
      >Home</motion.div>
    </section>
  );
}

export default HomeSection;
