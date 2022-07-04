import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Next Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex bg-black min-h-screen min-w-full mx-auto">
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
