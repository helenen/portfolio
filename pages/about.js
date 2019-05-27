import Header from "../components/Header";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
      />
    </Head>
    <Header />
    <p>This is the about page</p>
  </div>
);
