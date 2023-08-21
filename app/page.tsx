"use client";
import styles from "./page.module.css";
import { useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/about/AboutSection";
import HomeSection from "@/components/sections/home/HomeSection";
import BlogSection from "@/components/sections/blog/BlogSection";
import ContactSection from "@/components/sections/contact/ContactSection";

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
