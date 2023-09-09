"use client";
import { useEffect, useState } from "react";
import styles from "./splash.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function SplashScreen({
  loadingState: loading,
  setLoadingState: setLoading,
}: {
  loadingState: boolean;
  setLoadingState: (state: boolean) => void;
}) {
  useEffect(() => {
    const splashLoader = setTimeout(() => {
      setLoading(false);
      console.log("Loaded");
    }, 9000);

    return () => {
      clearTimeout(splashLoader);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <motion.div
        animate={{ width: "100%", transition: { duration: 8 } }}
        className={styles.line1}
      ></motion.div>
      <div className={styles.incontainer}>
        <Image src="/logo.svg" alt="j-logo" width={100} height={100} />
        <Typewriter
          options={{
            strings: ["Loading ...", "Getting ready !!!"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <motion.div
        animate={{ width: "100%", transition: { duration: 10 } }}
        className={styles.line2}
      ></motion.div>
    </div>
  );
}

export default SplashScreen;
