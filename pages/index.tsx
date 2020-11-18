import PostCard from "../components/PostCard";
import WriteButton from "../components/WriteButton";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import React from "react";
import firebase from "../firebase/clientApp";
import NotificationContext from "../context/notification";

export default function IndexPage() {
  const { noti, readed, setReaded } = React.useContext(NotificationContext);
  const [posts, setPosts] = React.useState([]);
  const [defaultVal, setDefualt] = React.useState("");
  React.useEffect(() => {
    setDefualt(localStorage.getItem("cmp") || "PUBLIC");
    firebase
      .firestore()
      .collection("post")
      .where("campus", "==", localStorage.getItem("cmp"))
      .onSnapshot((snap) => {
        setPosts(() => {
          let temp = snap.docs
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
            .filter((v) => v !== null);
          temp.sort((b, a) => {
            return a.createAt.valueOf() - b.createAt.valueOf();
          });
          return temp;
        });
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
          <h4 className="brand">{defaultVal}</h4>
        </Link>
        <Link href="/campus">
          <i
            aria-hidden
            className="ml-4 fa fa-chevron-down text-white text-xl"
          ></i>
        </Link>
        <Link href="/noti">
          <div className="ml-auto relative">
            <i aria-hidden className="fa fa-bell  text-white text-xl"></i>
            {!readed && (
              <i
                aria-hidden
                onClick={() => {
                  setReaded(true);
                }}
                style={{ fontSize: "0.5rem", left: "50%" }}
                className="absolute fa fa-circle text-mint-100 "
              ></i>
            )}
          </div>
        </Link>
      </motion.nav>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -10, opacity: 0 }}
        className={styles["page-container"]}
      >
        <h5 className="text-xl">Welcome</h5>
        <p>Nice to not meet you.</p>
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
