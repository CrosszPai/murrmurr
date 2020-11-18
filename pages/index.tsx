import PostCard from "../components/PostCard";
import WriteButton from "../components/WriteButton";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import React from "react";
import firebase from "../firebase/clientApp";

export default function IndexPage() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("post")
      .onSnapshot((snap) => {
        setPosts(
          snap.docs
            .map((val) => {
              if (val.data().createAt !== null) {
                return {
                  id: val.id,
                  ...val.data(),
                  createAt: val.data().createAt.toDate(),
                };
              }
              return null;
            })
            .filter((v) => v !== null)
        );
      });
  }, []);
  return (
    <>
      <motion.nav
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="nav"
      >
        <Link href="/">
          <h4 className="brand">KMITL</h4>
        </Link>
        <Link href="/campus">
          <i
            aria-hidden
            className="ml-4 fa fa-chevron-down text-white text-xl"
          ></i>
        </Link>
        <Link href="/noti">
          <i aria-hidden className="fa fa-bell ml-auto text-white text-xl"></i>
        </Link>
      </motion.nav>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -10, opacity: 0 }}
        className={styles["page-container"]}
      >
        <h5 className="text-xl">Public</h5>
        <p>Lorem ipsum dolor sit amet,</p>
        <div className="flex-auto">
          <div className="h-full overflow-auto" style={{ maxHeight: "80vh" }}>
            {posts.map((post, index) => {
              return <PostCard {...post} key={index} />;
            })}
          </div>
        </div>
      </motion.div>
      <WriteButton />
    </>
  );
}
