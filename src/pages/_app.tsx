import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  const path = useRouter().pathname;
  if (path === "/profile" || path === "/history") {
    return <Component {...pageProps} />;
  } else {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <ToastContainer limit={1} position="bottom-right" />
      </>
    );
  }
  // return (
  //   <>
  //     <Header />
  //     <Component {...pageProps} />
  //     <ToastContainer limit={1} position="bottom-right" />
  //   </>
  // );
}
