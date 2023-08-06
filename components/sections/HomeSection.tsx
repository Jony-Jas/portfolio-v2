"use client";
import styles from "./home.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";
import Button from "../Button";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function HomeSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const { setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(0);
    }
  }, [isInViewport]);

  return (
    <>
      <section className={styles.container} id="home" ref={ref}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <h1>Hy! I am Jony Jas</h1>
            <h3>FULL STACK & MOBILE DEVELOPER</h3>
            <div className={styles.content}>
              🚀 Passionate "Web & App Developer" and enthusiastic engineer 🛠️,
              constantly seeking opportunities to learn and grow, no matter the
              scale. Dedicated to building a better future through technology
              while enhancing personal development. 📈
              <br />
              <br />
              🎓 Currently a final-year undergrad, I possess a burning passion
              for software development, web, mobile development, and blockchain.
              I firmly believe in the power of curiosity, and I revel in
              exploring novel tech stacks to bring forth creative and innovative
              projects 💡
            </div>
            <div className={styles.buttonContainer}>
              <Button>
                <div className={styles.button}>
                  <Image src="/cv.svg" alt="Logo" width={25} height={25} />
                  <h3>Resume</h3>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.rectangleInnerContainer}>
            <div className={styles.socialContainer}>
              <div className={styles.socialIcon}>
                <SocialIcon url="https://jaketrent.com" network="instagram" />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon url="https://jaketrent.com" network="linkedin" />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon url="https://jaketrent.com" network="github" />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon url="https://jaketrent.com" network="behance" />
              </div>
            </div>
            <div className={styles.quotesContainer}>
              "Program codes are like the life story of software, and the ones
              who write this story are programmers"
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection;
