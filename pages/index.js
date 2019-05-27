import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Head from "next/head";

const style = {
  body: {
    backgroundColor: "#93E7FF",
    height: "100vh"
  }
};
const Index = () => (
  <div style={style.body}>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
      />
    </Head>
    <Header />
    <Introduce />
  </div>
);

export default Index;
