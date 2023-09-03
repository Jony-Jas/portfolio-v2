import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      {/* <Image alt="" src="/wave.png" width={100} height={150} /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width={1920.5} height={280.884}>
        <path
          fill="#fa8e44"
          d="M1920.5 305.884H0v-222.3c1.082.057 115.783 6.111 286.14 12.08 100.1 3.507 199.559 6.3 295.619 8.305 120.1 2.505 235.218 3.775 342.157 3.775 257.83 0 470.531-7.3 632.2-21.7 46.509-4.143 89.372-8.938 127.4-14.252 39.966-5.585 75.691-11.9 106.183-18.764 15.788-3.555 30.5-7.333 43.736-11.228 13.531-3.982 25.9-8.2 36.753-12.54a226.67 226.67 0 0 0 29.21-13.913A111.879 111.879 0 0 0 1920.5 0v305.883Z"
          data-name="Subtraction 17"
        />
      </svg>
      <div className={styles.content}>Made with ❤️ Jony Jas</div>
    </div>
  );
}

export default Footer;
