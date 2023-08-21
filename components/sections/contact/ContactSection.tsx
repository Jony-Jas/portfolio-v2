import styles from "./contact.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";
import Image from "next/image";
import { Formik, Field, Form } from "formik";

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
      <div className={styles.leftContainer}>
        <h1>Get in Touch</h1>
        <h1>Contact me</h1>
        <Image
          alt=""
          src="/contact/communication.png"
          width={450}
          height={400}
        />
      </div>
      <div className={styles.rightContainer}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={async (values, actions) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
          <Form>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <Field
              className={styles.field}
              name="name"
              placeholder="Full Name"
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <Field
              className={styles.field}
              name="email"
              placeholder="Email"
              type="email"
            />
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <Field
              className={styles.fieldArea}
              name="message"
              placeholder="Message"
              as={"textarea"}
            />
            <button className={styles.button} type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default ContactSection;
