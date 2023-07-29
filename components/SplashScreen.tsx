"use client";
import { useEffect, useState } from "react";
import styles from "./splash.module.css";
import Image from "next/image";

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
    }, 1500);

    return () => {
      clearTimeout(splashLoader);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Image src="/next.svg" alt="Logo" width={200} height={200} />
    </div>
  );
}

export default SplashScreen;
