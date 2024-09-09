import { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect } from "react"; // Tambahkan useEffect
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PlausibleProvider from "next-plausible";

const NEXT_PUBLIC_WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
if (NEXT_PUBLIC_WEBSITE_DOMAIN == null) {
  throw new Error("NEXT_PUBLIC_WEBSITE_DOMAIN is not set");
}

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  // Tambahkan logika untuk mendeteksi preferensi dark mode
  useEffect(() => {
    // Memeriksa apakah user lebih memilih mode gelap
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark"); // Tambahkan class 'dark' jika dark mode
    } else {
      document.documentElement.classList.remove("dark"); // Hapus class 'dark' jika light mode
    }
  }, []); // Hanya berjalan sekali setelah komponen di-mount

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <PlausibleProvider domain={NEXT_PUBLIC_WEBSITE_DOMAIN}>
          <Component {...pageProps} />
        </PlausibleProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
