import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // 서버 사이드 렌더링에서 사용할 수 없는 window 객체를 사용하기 위해서 클라이언트 사이드에서만 실행되도록 해줌
  return (
    <>
      {isClient && window.location.pathname !== "/profile" && <Header />}
      {/* profile 페이지에는 header를 렌더링 하지 않음 */}
      <Component {...pageProps} />
      <ToastContainer limit={1} position="bottom-right" />
    </>
  );
}
