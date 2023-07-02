import { AppProps } from "next/app";
import "../styles/globals.css";
import Nav from "@/components/Navbar/Nav";
import Hero from "@/components/Hero/Hero";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Hero />
      <Component {...pageProps} />
    </>
  );
};

export default App;
