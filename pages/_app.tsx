import "../styles/index.css";
import Head from "next/head";
import React from "react";
import { nanoid } from "nanoid";
import NotificationContext from "../context/notification";
import firebase from "../firebase/clientApp";

function MyApp({ Component, pageProps }) {
  const [noti, setNoti] = React.useState([]);
  const [readed, setReaded] = React.useState(true);
  React.useEffect(() => {
    if (!localStorage.getItem("uid")) {
      localStorage.setItem("uid", nanoid());
    }
    if (!localStorage.getItem("cmp")) {
      localStorage.setItem("cmp", "PUBLIC");
    }
    if (localStorage.getItem("uid")) {
      firebase
        .firestore()
        .collection("reply")
        .where("createId", "==", localStorage.getItem("uid"))
        .onSnapshot((snap) => {
          snap.docChanges().forEach((change) => {
            if (change.type === "added") {
              console.log(change.doc.data().createId);

              setNoti((old) => {
                const temp = [...old, change.doc.data()].filter(
                  (v) => v.Icon !== -1
                );
                temp.sort((b, a) => {
                  return a.createAt.valueOf() - b.createAt.valueOf();
                });
                setReaded(false);
                return temp;
              });
            }
          });
        });
    }
  }, []);
  return (
    <NotificationContext.Provider value={{ noti, setNoti, readed, setReaded }}>
      <Head>
        <script
          src="https://kit.fontawesome.com/a23231f90d.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </NotificationContext.Provider>
  );
}

export default MyApp;
