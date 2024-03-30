import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          deserunt unde mollitia incidunt ipsa veritatis laboriosam assumenda
          doloremque dignissimos omnis illo nihil animi, provident rem, quidem,
          accusamus tempora error. Distinctio, autem corrupti aliquam ducimus
          qui aliquid nesciunt nisi dicta totam recusandae id explicabo error
          sunt vel. Tempora vero blanditiis aliquam.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          width={500}
          height={500}
          src="/about.png"
          alt="about"
        />
      </div>
    </div>
  );
};
export default About;
