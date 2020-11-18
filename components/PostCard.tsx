import { useRouter } from 'next/router';
import styles from './index.module.css'

function PostCard() {
  const Router = useRouter()
  return (
    <div onClick={()=>{
      Router.push(`/post/${Math.random()}`)
    }} className={styles["card-container"]}>
      <p>Text</p>
      <div>
        <div className="text-gray-10 text-sm">3 min ago</div>
        <div className="ml-auto">1</div>
        <i aria-hidden className="fas ml-2 fa-comment-alt text-gray-50" />
      </div>
    </div>
  );
}

export default PostCard;
