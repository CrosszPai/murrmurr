import styles from "./index.module.css";
import { useRouter } from "next/router";
function WriteButton() {
  const Router = useRouter();
  return (
    <button onClick={()=>Router.push('/write')} className={styles["write-btn"]}>
      <i aria-hidden className="p-4 fa fa-pen text-black"></i>
    </button>
  );
}

export default WriteButton;
