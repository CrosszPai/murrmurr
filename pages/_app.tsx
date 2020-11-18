import "../styles/index.css";
import Head from "next/head";
import React from "react";
import { nanoid } from "nanoid";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (!localStorage.getItem("uid")) {
      localStorage.setItem("uid", nanoid());
    }
  }, []);
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/a23231f90d.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
