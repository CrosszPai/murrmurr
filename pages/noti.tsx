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
        <div style={{ maxHeight: "80vh" }} className="h-full overflow-auto">
          {Array(10)
            .fill(0)
            .map((v, i) => {
              return <NotificationCard key={i} />;
            })}
        </div>
      </div>
    </>
  );
}
export default Notification;
