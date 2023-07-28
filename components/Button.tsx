import styles from "./button.module.css"

function Button({ children }:{children:React.ReactNode}) {
  return <button className={styles.container}>
    {children}
  </button>;
}

export default Button;
