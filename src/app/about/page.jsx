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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          omnis deleniti nam maxime quis voluptatum officia excepturi ut odit.
          Perspiciatis repudiandae, reprehenderit iusto minus velit quam illo
          mollitia! Iure voluptas neque, quas dignissimos facilis labore quis
          ipsa, accusamus sapiente vero sequi suscipit eos nam illo perferendis
          corrupti vitae. Aperiam eveniet laborum aliquam quo magni eius. Magnam
          molestiae voluptatibus natus eveniet.
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
