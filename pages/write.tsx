import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import React from "react";
import firebase from "../firebase/clientApp";
import { post } from "../types";

function Write() {
  const Router = useRouter();
  const textRef = React.useRef<HTMLTextAreaElement>();
  const [len, setLength] = React.useState(0);
  const onChange = React.useCallback(() => {
    setLength(textRef.current.value.length);
  }, [textRef]);

  const submit = async () => {
    try {
      const res = await firebase
        .firestore()
        .collection("post")
        .add({
          campus: localStorage.getItem("cmp"),
          content: textRef.current.value,
          userId: localStorage.getItem("uid"),
          createAt: firebase.firestore.FieldValue.serverTimestamp() as any,
          userName: nanoid(),
          replyCount: 0,
        } as post);
      console.log(res);
      textRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
    onChange();
    Router.back();
  };
  return (
    <>
      <motion.nav
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="nav"
      >
        <i
          aria-hidden
          onClick={() => {
            Router.back();
          }}
          className="fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-base mr-auto ml-2 font-normal">CREATE POST</h4>
        <h4 onClick={submit} className="text-mint-100 cursor-pointer">
          POST
        </h4>
      </motion.nav>
      <div className="flex-auto p-4">
        <textarea
          onChange={onChange}
          ref={textRef}
          maxLength={200}
          style={{
            height: "30%",
          }}
          className="text-gray-10 bg-transparent outline-none w-full resize-none"
        />
        <div className="float-right text-mint-100">{len}/200</div>
      </div>
    </>
  );
}

export default Write;
