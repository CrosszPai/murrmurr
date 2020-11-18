import { motion, useAnimation } from "framer-motion";
import React from "react";
import styles from "./index.module.css";
import firebase from "../firebase/clientApp";
import { reply } from "../types";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

const CommentBox = React.forwardRef(
  (
    {
      animated,
      toggleInput,
      isToggle,
      ownReply,
      userName,
      onSuccess,
      post,
    }: any,
    ref
  ) => {
    const textRef = React.useRef<HTMLTextAreaElement>();
    const [len, setLength] = React.useState(0);
    const Router = useRouter();
    const onChange = React.useCallback(() => {
      setLength(textRef.current.value.length);
    }, [textRef]);
    const submit = () => {
      if (ownReply) {
        firebase
          .firestore()
          .collection("reply")
          .add({
            Icon:
              post.userId === localStorage.getItem("uid") ? -1 : ownReply.Icon,
            content: textRef.current.value,
            createAt: firebase.firestore.FieldValue.serverTimestamp() as any,
            postRef: Router.query["id"],
            userId: localStorage.getItem("uid"),
            userName:
              post.userId === localStorage.getItem("uid")
                ? post.userName
                : ownReply.userName,
          } as reply);
      } else {
        firebase
          .firestore()
          .collection("reply")
          .add({
            Icon:
              post.userId === localStorage.getItem("uid")
                ? -1
                : Math.round(Math.random() * 10) % 7,
            content: textRef.current.value,
            createAt: firebase.firestore.FieldValue.serverTimestamp() as any,
            postRef: Router.query["id"],
            userId: localStorage.getItem("uid"),
            userName:
              post.userId === localStorage.getItem("uid") ? userName : nanoid(),
          } as reply);
      }
      firebase
        .firestore()
        .collection("post")
        .doc(Router.query["id"] as string)
        .update({
          replyCount: firebase.firestore.FieldValue.increment(1),
        });
      onSuccess();
      textRef.current.value = "";
    };
    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        transition={spring}
        animate={animated}
        onClick={toggleInput}
        style={{
          height: "40vh",
          bottom: "-40vh",
          transform: "translateY(-10vh)",
        }}
        className="fixed flex flex-col w-screen rounded-t-3xl p-4 bg-gray-80"
      >
        <div className="flex">
          <textarea
            onChange={onChange}
            ref={textRef}
            maxLength={200}
            placeholder="Add a comment..."
            className={styles["comment-box"]}
          />
          <button
            onClick={submit}
            disabled={!isToggle}
            style={{ height: "fit-content" }}
          >
            <i
              aria-hidden
              className="fas mt-2 text-mint-100 fa-paper-plane"
            ></i>
          </button>
        </div>
        <div className="ml-auto mt-auto text-mint-100 transform -translate-y-4">
          {len}/200
        </div>
      </motion.div>
    );
  }
);
CommentBox.displayName = "CommentBox";
export default CommentBox;
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
