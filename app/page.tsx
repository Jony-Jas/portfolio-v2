"use client";
import AboutSection from "@/components/sections/AboutSection";
import styles from "./page.module.css";
import { useState } from "react";

import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import HomeSection from "@/components/sections/home/HomeSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen loadingState={loading} setLoadingState={setLoading} />;
  }

  return (
    <main className={styles.container}>
      <Header />
      <HomeSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
