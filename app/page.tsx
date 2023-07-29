"use client";
import AboutSection from "@/components/sections/AboutSection";
import styles from "./page.module.css";
import { useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import HomeSection from "@/components/sections/HomeSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <SplashScreen loadingState={loading} setLoadingState={setLoading} />;
  }

  return (
    <main className={styles.container}>
      <HomeSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
