import { motion } from "framer-motion";
import moment from "moment";
import { useRouter } from "next/router";
import { post } from "../types";
import styles from "./index.module.css";

interface PostCardProps extends post {}

function PostCard(props: PostCardProps) {
  const Router = useRouter();
  return (
    <motion.div
      initial={{
        x: 10,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      onClick={() => {
        Router.push(`/post/${props.id}`);
      }}
      className={styles["card-container"]}
    >
      <p>{props.content}</p>
      <div>
        <div className="text-gray-10 text-sm">
          {moment(props.createAt).fromNow()}
        </div>
        <div className="ml-auto">{props.replyCount}</div>
        <i aria-hidden className="fas ml-2 fa-comment-alt text-gray-50" />
      </div>
    </motion.div>
  );
}

export default PostCard;
