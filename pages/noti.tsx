import { useRouter } from "next/router";
import NotificationCard from "../components/NotificationCard";

function Notification() {
  const Router = useRouter();
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
        <h4 className="text-xl mr-auto font-normal">NOTIFICATION</h4>
      </nav>
      <div className="p-4 flex-auto">
        <NotificationCard />
      </div>
    </>
  );
}
export default Notification;
