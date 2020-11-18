import { nanoid } from "nanoid";
import { post, reply } from "../../types";
import moment from "moment";

const Icon = [
  "secret",
  "nurse",
  "ninja",
  "md",
  "injured",
  "graduate",
  "astronaut",
];

interface PostDetailProps extends post {
  reply: Array<reply>;
}

function PostDetail(props: PostDetailProps) {
  const temp = [...props.reply];
  temp.sort((a, b) => {
    return a.createAt.valueOf() - b.createAt.valueOf();
  });
  return (
    <div className="text-gray-10 h-full pb-24 flex flex-col">
      <div className="flex mb-2">
        <i
          aria-hidden
          className="rounded-full border border-white fas fa-user p-3 mr-2"
          style={{ height: "fit-content" }}
        ></i>
        <div>
          <h4 className="text-base">{props.userName}</h4>
          <p className="text-xs text-gray-50">
            {moment(props.createAt).fromNow()}
          </p>
        </div>
      </div>
      <p className="mb-4">{props.content}</p>
      <div
        style={{ maxHeight: "60vh" }}
        className="pl-6 border-l border-white flex-auto overflow-auto"
      >
        {temp.map((rep, i) => (
          <div className="my-2" key={i}>
            <div className="flex mb-2">
              <i
                aria-hidden
                className={`rounded-full border border-white fas ${
                  rep.Icon === -1 ? "fa-user" : `fa-user-${Icon[rep.Icon]}`
                } p-3 mr-2`}
                style={{ height: "fit-content" }}
              ></i>
              <div>
                <h4 className="text-base">{rep.userName}</h4>
                <p className="text-xs text-gray-50">
                  {moment(rep.createAt).fromNow()}
                  {Icon[rep.Icon]}
                  {rep.Icon}
                </p>
              </div>
            </div>
            <p className="mb-2">{rep.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostDetail;
