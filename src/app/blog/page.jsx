import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const url = "https://jsonplaceholder.typicode.com/posts";

const getData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

getData();

const Blog = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
