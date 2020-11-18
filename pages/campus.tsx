import { motion } from "framer-motion";
import { useRouter } from "next/router";
import CampusList from "../components/CampusList";

function Campus() {
  const Router = useRouter();
  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="nav justify-start"
      >
        <i
          aria-hidden={true}
          onClick={() => {
            Router.back();
          }}
          className="fa fa-chevron-left text-xl text-gray-10 mr-2"
        ></i>
        <h4 className="text-base font-normal">SELECT CAMPUS</h4>
        <button className="text-mint-100 outline-none ml-auto text-base">
          WRAP
        </button>
      </motion.nav>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-4 flex-auto text-gray-10"
      >
        <h4 className="text-xl">Campus</h4>
        <p className="text-xs mb-8">Lorem ipsum dolor sit amet,</p>
        <CampusList/>
      </motion.div>
    </>
  );
}

export default Campus;
