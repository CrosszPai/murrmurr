import { useRouter } from "next/router";
import React from "react";

function Write() {
  const Router = useRouter();
  const textRef = React.useRef<HTMLTextAreaElement>();
  const [len, setLength] = React.useState(0);
  const onChange = React.useCallback(() => {
    setLength(textRef.current.value.length);
  }, [textRef]);
  return (
    <>
      <nav className="nav">
        <i
          aria-hidden
          onClick={() => {
            Router.back();
          }}
          className="fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-base mr-auto ml-2 font-normal">CREATE POST</h4>
        <h4 className="text-mint-100">POST</h4>
      </nav>
      <div className="flex-auto p-4">
        <textarea
          onChange={onChange}
          ref={textRef}
          maxLength={200}
          style={{
            height: "50%",
          }}
          className="text-gray-10 bg-transparent outline-none w-full resize-none"
        />
        <div className="float-right text-mint-100">{len}/200</div>
      </div>
    </>
  );
}

export default Write;
