import { reply } from "../types";
import moment from "moment";
import { useRouter } from "next/router";

const Icon = [
  "secret",
  "nurse",
  "ninja",
  "md",
  "injured",
  "graduate",
  "astronaut",
];
function NotificationCard(props: reply) {
  const Router = useRouter();
  return (
    <div onClick={()=>{Router.push(`/post/${props.postRef}`)}} className="rounded-2xl p-4 w-full cursor-pointer text-white bg-gray-80 my-2 flex">
      <div
        style={{ height: "fit-content" }}
        className="rounded-full border border-white mr-4"
      >
        <i aria-hidden className={`p-4 fa fa-user-${Icon[props.Icon]}`}></i>
      </div>
      <div className="text-gray-10">
        <h6 className="font-medium mb-2">{props.postContent}</h6>
        <p className="text-sm mb-2">{props.content}</p>
        <p className="text-xs">
          {moment(props.createAt["toDate"]()).fromNow()}
        </p>
      </div>
    </div>
  );
}

export default NotificationCard;
