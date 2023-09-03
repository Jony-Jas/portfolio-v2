"use client";
import styles from "./home.module.css";
import styles2 from "./homeRight.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";
import Button from "../../Button";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

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
              {/* <br />
              🎓 Currently a final-year undergrad, I possess a burning passion
              for software development, web, mobile development, and blockchain.
              I firmly believe in the power of curiosity, and I revel in
              exploring novel tech stacks to bring forth creative and innovative
              projects 💡 */}
            </div>
            <div className={styles.buttonContainer}>
              <Button>
                <div className={styles.button}>
                  <Image src="/cv.svg" alt="cv" width={25} height={25} />
                  <h3>Resume</h3>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles2.rightContainer}>
            <div className={styles2.rightInnerContainer}>
              <div className={styles2.rectangle}>
                <Image
                  className={styles2.profileImg}
                  src="/home/rectangle.png"
                  alt="jony jas"
                  width={400}
                  height={400}
                />
                <motion.div
                  style={{
                    position: "absolute",
                    right: "100%",
                    bottom: "80%",
                  }}
                  animate={{ x: 0, transition: { duration: 0.8 } }}
                  initial={{ x: -35 }}
                >
                  <Image
                    src="/home/cool.png"
                    alt="cool-icon"
                    width={60}
                    height={60}
                    style={{
                      width: "4vw",
                      height: "4vw",
                      maxHeight: "75px",
                      maxWidth: "75px",
                      minHeight: "45px",
                      minWidth: "45px",
                    }}
                    className="coolIcon"
                  />
                </motion.div>
                <motion.div
                  style={{ position: "absolute", top: "-1vw", right: "-15%" }}
                  animate={{ x: 0, transition: { duration: 0.8 } }}
                  initial={{ x: 35 }}
                >
                  <Image
                    src="/home/web.png"
                    alt="web-icon"
                    width={180}
                    height={70}
                    style={{
                      width: "12vw",
                      height: "5vw",
                      maxHeight: "75px",
                      maxWidth: "180px",
                      minHeight: "45px",
                      minWidth: "110px",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{ position: "absolute", right: "80%", top: "80%" }}
                  animate={{ x: 0, transition: { duration: 0.8 } }}
                  initial={{ x: -35 }}
                >
                  <Image
                    src="/home/ui.png"
                    alt="ui-icon"
                    width={180}
                    height={70}
                    style={{
                      width: "12vw",
                      height: "5vw",
                      maxHeight: "75px",
                      maxWidth: "180px",
                      minHeight: "45px",
                      minWidth: "110px",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{
                    position: "absolute",
                    right: "0%",
                    top: "85%",
                    zIndex: 1,
                  }}
                  animate={{ x: 0, transition: { duration: 0.8 } }}
                  initial={{ x: 35 }}
                >
                  <Image
                    src="/home/android.png"
                    alt="android-icon"
                    width={70}
                    height={100}
                    style={{
                      width: "9vw",
                      height: "12vw",
                      maxHeight: "100px",
                      maxWidth: "70px",
                      minHeight: "85px",
                      minWidth: "60px",
                    }}
                  />
                </motion.div>
              </div>
              <div className={styles2.circle}>
                <Image
                  src="/home/jony.png"
                  alt="jony jas"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.rectangleInnerContainer}>
            <div className={styles.socialContainer}>
              <div className={styles.socialIcon}>
                <SocialIcon
                  url="https://instagram.com/_jony.j"
                  network="instagram"
                  target="blank"
                />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon
                  url="https://www.linkedin.com/in/jony-jas/"
                  network="linkedin"
                  target="blank"
                />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon
                  url="https://github.com/Jony-Jas"
                  network="github"
                  target="blank"
                />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon
                  url="https://x.com/_jonyj"
                  network="twitter"
                  target="blank"
                />
              </div>
              <div className={styles.socialIcon}>
                <SocialIcon
                  url="https://www.behance.net/jonyjas"
                  network="behance"
                  target="blank"
                />
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
