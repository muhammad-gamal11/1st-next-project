import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.image}>
      <Image width={500} height={500} src="/about.png" alt="about" />
    </div>
  );
};
export default About;
