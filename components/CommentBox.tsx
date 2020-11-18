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
    const sendAnimate = useAnimation();
    const textRef = React.useRef<HTMLTextAreaElement>();
    const [len, setLength] = React.useState(0);
    const Router = useRouter();
    const onChange = React.useCallback(() => {
      setLength(textRef.current.value.length);
    }, [textRef]);
    const submit = async () => {
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
            createId: post.userId,
            postContent: post.content,
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
            createId: post.userId,
            postContent: post.content,
          } as reply);
      }
      firebase
        .firestore()
        .collection("post")
        .doc(Router.query["id"] as string)
        .update({
          replyCount: firebase.firestore.FieldValue.increment(1),
        });
      await onSuccess();
      textRef.current.value = "";
    };
    React.useEffect(() => {
      (async () => {
        if (isToggle) {
          await sendAnimate.start({
            y: 200,
          });
        } else {
          await sendAnimate.start({
            y: 0,
          });
        }
      })();
    }, [isToggle]);
    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        transition={spring}
        animate={animated}
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
            onClick={() => {
              toggleInput();
            }}
            maxLength={200}
            placeholder="Add a comment..."
            className={styles["comment-box"]}
          />
          <motion.button
            transition={{
              delay: 0,
              stiffness: 50,
            }}
            animate={sendAnimate}
            onClick={submit}
            className="outline-none"
            style={{ height: "fit-content" }}
          >
            <i
              aria-hidden
              className="fas mt-2 text-mint-100 fa-paper-plane"
            ></i>
          </motion.button>
        </div>
        <div className="mr-auto mt-4 text-mint-100 transform -translate-y-4">
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
