import { motion, useAnimation } from "framer-motion";
import React from "react";
import styles from "./index.module.css";

const CommentBox = React.forwardRef(
  ({ animated, toggleInput, isToggle }: any, ref) => {
    const textRef = React.useRef<HTMLTextAreaElement>();
    const [len, setLength] = React.useState(0);
    const onChange = React.useCallback(() => {
      setLength(textRef.current.value.length);
    }, [textRef]);
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
          <button disabled={!isToggle} style={{height:'fit-content'}}><i aria-hidden className="fas mt-2 text-mint-100 fa-paper-plane"></i></button>
        </div>
        <div className="ml-auto mt-auto text-mint-100 transform -translate-y-4">{len}/200</div>
      </motion.div>
    );
  }
);

export default CommentBox;
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
