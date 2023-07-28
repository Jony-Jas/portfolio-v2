import AboutSection from "@/components/sections/AboutSection";
import styles from "./page.module.css";

import HomeSection from "@/components/sections/HomeSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className={styles.container}>
      <HomeSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
