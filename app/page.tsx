import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h2 className={styles.main}>Hello, world</h2>
      <span className={styles.text}>
        💻 I also have an interest in computer architectures, I love exploring
        new tech stacks and leveraging them to build cool stuff. and also I can
        do it.
      </span>
      <div id="rectangle"></div>
    </main>
  );
}
