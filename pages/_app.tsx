import { AppProps } from "next/app";
import "../styles/globals.css";
import Nav from "@/components/Navbar/Nav";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      
      <Component {...pageProps} />
    </>
  );
};

export default App;
