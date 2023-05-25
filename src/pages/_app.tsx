import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <ToastContainer limit={1} position="bottom-right" />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
