import Image from "next/image";

import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/post.png" alt="" fill className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry anderson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.contact}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
          delectus voluptas beatae numquam praesentium saepe, corrupti
          repellendus eligendi, assumenda repellat reprehenderit? Est magni quas
          corrupti nihil et nemo sint.
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
