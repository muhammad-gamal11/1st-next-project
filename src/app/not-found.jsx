import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>sorry,the page you are looking for is not available</p>
      <Link href="/">back home</Link>
    </>
  );
};
export default NotFound;
