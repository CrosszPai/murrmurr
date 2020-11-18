import { nanoid } from "nanoid";
import { post, reply } from "../../types";
import moment from "moment";

interface PostDetailProps extends post {
  reply: Array<reply>;
}

function PostDetail(props: PostDetailProps) {
  return (
    <div className="text-gray-10 h-full pb-24 flex flex-col">
      <div className="flex mb-2">
        <i
          aria-hidden
          className="rounded-full border border-white fas fa-user p-3 mr-2"
          style={{ height: "fit-content" }}
        ></i>
        <div>
          <h4 className="text-base">{nanoid()}</h4>
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
        {props.reply.map((rep, i) => (
          <div className="my-2" key={i}>
            <div className="flex mb-2">
              <i
                aria-hidden
                className="rounded-full border border-white fas fa-user p-3 mr-2"
                style={{ height: "fit-content" }}
              ></i>
              <div>
                <h4 className="text-base">{nanoid()}</h4>
                <p className="text-xs text-gray-50">
                  {moment(rep.createAt).fromNow()}
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
