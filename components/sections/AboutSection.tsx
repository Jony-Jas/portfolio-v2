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
      <h1>AboutSection</h1>
    </section>
  );
}

export default AboutSection;
