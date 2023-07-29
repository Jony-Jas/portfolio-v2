import styles from "./contact.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";

function ContactSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const { setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(3);
    }
  }, [isInViewport]);

  return (
    <section className={styles.container} id="contact" ref={ref}>
      <h1>Contact</h1>
    </section>
  );
}

export default ContactSection;
