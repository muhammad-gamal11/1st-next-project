import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },

    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return (
          <Link href={link.link} key={link.title}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};
export default Links;
