import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <Image alt="" src="/wave.png" width={100} height={150} />
    </div>
  );
}

export default Footer;
