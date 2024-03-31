import Image from "next/image";
import styles from "./singlePost.module.css";

const getData = async (slug) => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const response = await fetch(`${url}${slug}`);
  // if (!response.ok) {
  //   throw new Error("Something went wrong");
  // }
  const data = await response.json();
  // console.log(data);
  return data;
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            width={50}
            height={50}
            src="https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry anderson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.contact}>{}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
