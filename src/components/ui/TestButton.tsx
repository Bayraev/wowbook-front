import Image from "next/image";
import NextBtn from "@/assets/svg/icon/profile.svg";
import styles from "./TestButton.module.css";

export function TestButton() {
  return (
    <button className={styles.btn_container}>
      <span className={styles.btn_icon}>
        <Image src={NextBtn} alt="icon" />
      </span>
      <span className={styles.btn_text}>Button</span>
    </button>
  );
}
