import styles from "./blog.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

function BlogSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  const { setPage } = useAppStore();

  useEffect(() => {
    if (isInViewport) {
      setPage(2);
    }
  }, [isInViewport]);

  return (
    <section className={styles.container} id="blog" ref={ref}>
      <div className={styles.header}>
        <h1>Blog</h1>
        <h1>Posts</h1>
      </div>
      <div className={styles.swipeContainer}>
        <Swiper
          initialSlide={1}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: 70 }}
        >
          <SwiperSlide
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <div className={styles.box}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image alt="" src="/blog/react.png" width={300} height={400} />
                <div className={styles.inbox}>
                  <h2>
                    <a
                      style={{ color: "inherit" }}
                      href="https://blog.jonyjas.com/"
                      target="_blank"
                    >
                      Detect Shake Events in React Native
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <div className={styles.box}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image alt="" src="/blog/next.png" width={300} height={400} />
                <div className={styles.inbox}>
                <h2>
                    <a
                      style={{ color: "inherit" }}
                      href="https://blog.jonyjas.com/"
                      target="_blank"
                    >
                      Getting Started with NextJS
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <div className={styles.box}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image alt="" src="/blog/js.png" width={300} height={400} />
                <div className={styles.inbox}>
                <h2>
                    <a
                      style={{ color: "inherit" }}
                      href="https://blog.jonyjas.com/"
                      target="_blank"
                    >
                      Mastering JavaScript
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default BlogSection;
