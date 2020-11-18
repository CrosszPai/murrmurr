import { useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import CommentBox from "../../components/CommentBox";
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
          y: "-0vh",
        })
        .then(() => {
          setToggle(false);
        });
    }
  });
  const toggleInput = () => {
    animated
      .start({
        y: isToggle ? "-10vh" : "-40vh",
      })
      .then(() => {
        setToggle(!isToggle);
      });
  };
  return (
    <>
      <nav className="nav">
        <i
          aria-hidden={true}
          onClick={() => {
            Router.back();
          }}
          className="mr-auto fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-xl mr-auto font-normal">MUR MUR</h4>
      </nav>
      <div className="flex-auto">
        <CommentBox
          ref={ref}
          isToggle={isToggle}
          animated={animated}
          toggleInput={toggleInput}
        />
      </div>
    </>
  );
}

export default PostPage;
