import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="grid h-screen grid-cols-12 gap-6 px-8 my-12 lg:px-48 lg:items-center lg:justify-center sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white border border-gray-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white border border-gray-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
