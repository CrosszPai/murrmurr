import PostCard from "../components/PostCard";
import WriteButton from "../components/WriteButton";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function IndexPage() {
  return (
    <>
      <nav className="nav">
        <Link href="/">
          <h4 className="brand">KMITL</h4>
        </Link>
        <i aria-hidden className="ml-4 fa fa-chevron-down text-white text-xl"></i>
        <Link href="/noti">
          <i aria-hidden className="fa fa-bell ml-auto text-white text-xl"></i>
        </Link>
      </nav>
      <div className={styles["page-container"]}>
        <h5 className="text-xl">Public</h5>
        <p>Lorem ipsum dolor sit amet,</p>
        {new Array(5).fill(0).map((a,i) => (
          <PostCard key={i} />
        ))}
      </div>
      <WriteButton />
    </>
  );
}
