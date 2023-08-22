import styles from "./contact.module.css";
import { useRef, useEffect } from "react";
import { useIsInViewport } from "@/utils/inViewPort";
import { useAppStore } from "@/store/appStore";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import Button from "@/components/Button";

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
            <div className={styles.inputField}>
              <Field className={styles.field} name="name" required />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.inputField}>
              <Field className={styles.field} name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.inputAreaField}>
              <Field
                className={styles.fieldArea}
                name="message"
                required
                as={"textarea"}
              />
              <label htmlFor="message">Message</label>
            </div>
            <div className={styles.buttonDiv}>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default ContactSection;
