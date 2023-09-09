import styles from "./about.module.css";
import styles2 from "./aboutRight.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView, useAnimation } from "framer-motion";

function AboutSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const { setPage } = useAppStore();
  const isInView = useInView(ref, { once: false });

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
          🎓 Currently a final-year undergrad, I possess a burning passion for
          software development, web, mobile development, and blockchain. I
          firmly believe in the power of curiosity, and I revel in exploring
          novel tech stacks to bring forth creative and innovative projects 💡
          <br />
          <br />
          <h3>Languages:</h3>
          <span>
            &emsp;Java, JavaScript, TypeScript, C/C++, HTML, CSS, Python,
            Solidity, MATLAB
          </span>
          <h3>Technologies:</h3>
          &emsp;React, Redux, React Native, Git, Docker, Node.js, Mongo DB,
          GraphQL, MySQL, Next js, JSP, Spring Boot, Adobe XD
          <br />
          <br />
          <div className={styles.links}>
            <a href="https://leetcode.com/jony-jas/" target="_blank">LeetCode</a>
            <a href="https://auth.geeksforgeeks.org/user/jonyjasjonyjas" target="_blank">GeeksForGeeks</a>
            <a href="https://www.codingninjas.com/studio/profile/219d3d2d-8d4d-47d4-b289-c65fcc1b22b3/" target="_blank">CodingNinjas</a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles2.holder}>
          <div className={styles2.mainCircle}>
            <div className={styles2.subCircle1}></div>
            <div className={styles2.subCircle2}></div>
            <div className={styles2.subCircle0}>
              <div
                className={styles2.inCircle}
                style={{ width: "80%", height: "80%" }}
              ></div>
              <div
                className={styles2.inCircle}
                style={{ width: "60%", height: "60%" }}
              ></div>
              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ left: "20%", top: "5%" }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/java.png" width={30} height={35} />
              </motion.div>

              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ left: 0 }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/c.png" width={35} height={35} />
              </motion.div>

              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ right: "20%", bottom: "5%" }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/atom.png" width={35} height={35} />
              </motion.div>
              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ right: 10 }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/js.png" width={35} height={35} />
              </motion.div>
              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ top: "5%", right: "20%" }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/nodejs.png" width={35} height={35} />
              </motion.div>
              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ bottom: "5%", left: "20%" }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/xd.png" width={35} height={35} />
              </motion.div>
              <motion.div
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={styles2.circleElement}
              >
                <Image alt="" src="/about/coding.png" width={35} height={35} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
