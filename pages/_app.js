import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/a23231f90d.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
