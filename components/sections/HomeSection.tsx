"use client";
import styles from "./home.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";

function HomeSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const {setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(0);
    }
  }, [isInViewport]);

  return (
    <section className={styles.container} id="home" ref={ref}>
      <motion.div animate={{ x: 500, y: 500 }}>Home</motion.div>
    </section>
  );
}

export default HomeSection;
