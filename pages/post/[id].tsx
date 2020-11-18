import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import CommentBox from "../../components/CommentBox";
import PostDetial from "../../components/PostDetail";
import useClickOutside from "../../hooks/useClickOutside";

function PostPage() {
  const animated = useAnimation();
  const [isToggle, setToggle] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();
  const Router = useRouter();
  useClickOutside(ref, null, () => {
    console.log("asd");
    if (isToggle) {
      animated
        .start({
          y: "-10vh",
        })
        .then(() => {
          setToggle(false);
        });
    }
  });
  const toggleInput = () => {
    if (!isToggle) {
      animated
        .start({
          y: isToggle ? "-10vh" : "-40vh",
        })
        .then(() => {
          setToggle(!isToggle);
        });
    }
  };
  return (
    <>
      <motion.nav
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="nav"
      >
        <i
          aria-hidden={true}
          onClick={() => {
            Router.back();
          }}
          className="mr-auto fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-xl mr-auto font-normal">MUR MUR</h4>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-auto p-4"
      >
        <PostDetial />
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 10, opacity: 0 }}
      >
        <CommentBox
          ref={ref}
          isToggle={isToggle}
          animated={animated}
          toggleInput={toggleInput}
        />
      </motion.div>
    </>
  );
}

export default PostPage;
