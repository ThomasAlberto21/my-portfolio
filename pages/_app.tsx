import { AppProps } from "next/app";
import "../styles/globals.css";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  );
};

export default App;
