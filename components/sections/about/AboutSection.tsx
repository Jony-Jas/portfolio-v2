import styles from "./about.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";

function AboutSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const { setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(1);
    }
  }, [isInViewport]);

  return (
    <section className={styles.container} id="about" ref={ref}>
      <div className={styles.leftContainer}>
        <h1>What do I</h1>
        <h1>play with ....</h1>
        <div className={styles.content}>
          🚀 Passionate "Web & App Developer" and enthusiastic engineer 🛠️,
          constantly seeking opportunities to learn and grow, no matter the
          scale. Dedicated to building a better future through technology while
          enhancing personal development. 📈
          <br />
          <br />
          🎓 Currently a final-year undergrad, I possess a burning passion for
          software development, web, mobile development, and blockchain. I
          firmly believe in the power of curiosity, and I revel in exploring
          novel tech stacks to bring forth creative and innovative projects 💡
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>right side</div>
      </div>
    </section>
  );
}

export default AboutSection;
