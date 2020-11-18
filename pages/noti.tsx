import { useRouter } from "next/router";
import React from "react";
import NotificationCard from "../components/NotificationCard";
import NotificationContext from "../context/notification";
import { reply } from "../types";
import { motion } from "framer-motion";

const Icon = [
  "secret",
  "nurse",
  "ninja",
  "md",
  "injured",
  "graduate",
  "astronaut",
];

function Notification() {
  const Router = useRouter();
  const { noti }: { noti: Array<reply> } = React.useContext(
    NotificationContext
  );
  return (
    <>
      <motion.nav
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="nav"
      >
        <i
          aria-hidden={true}
          onClick={() => {
            Router.push("/");
          }}
          className="mr-auto fa fa-chevron-left text-xl"
        ></i>
        <h4 className="text-xl mr-auto font-normal">NOTIFICATION</h4>
      </motion.nav>
      <div className="p-4 flex-auto">
        <div style={{ maxHeight: "80vh" }} className="h-full overflow-auto">
          {noti.map((v, i) => {
            return <NotificationCard {...v} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Notification;
