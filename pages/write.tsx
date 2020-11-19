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
    setLength(textRef.current.value.trim().length);
  }, [textRef]);

  const submit = async () => {
    if (len < 1) {
      return;
    }
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
      setLength(0);
    } catch (error) {
      console.log(error);
    }
    onChange();
    Router.push("/");
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
            Router.push("/");
          }}
          className="fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-base mr-auto ml-2 font-normal">CREATE POST</h4>
        <h4
          onClick={submit}
          className={`${
            len > 0 ? "text-mint-100" : "text-gray-40"
          } cursor-pointer`}
        >
          POST
        </h4>
      </motion.nav>
      <div className="flex-auto flex flex-col p-4">
        <textarea
          onChange={onChange}
          ref={textRef}
          maxLength={200}
          style={{
            height: "30%",
          }}
          className="text-gray-10 bg-transparent outline-none w-full resize-none"
        />
        <div className="mt-auto ml-auto text-mint-100">{len}/200</div>
      </div>
    </>
  );
}

export default Write;
