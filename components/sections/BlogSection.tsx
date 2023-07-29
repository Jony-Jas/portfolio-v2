import styles from "./blog.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";

function BlogSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const {setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(2);
    }
  }, [isInViewport]);

  return (
    <section className={styles.container} id="blog" ref={ref}>
      BlogSection
    </section>
  );
}

export default BlogSection;
