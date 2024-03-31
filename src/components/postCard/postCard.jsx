import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  // console.log(post);
  const { id, title, body } = post;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17444426/pexels-photo-17444426/free-photo-of-mosque-of-muhammad-ali-in-cairo.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{body}</p>
        <Link className={styles.link} href={`/blog/${id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
