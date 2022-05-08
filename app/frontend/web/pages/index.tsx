import type { GetServerSideProps, NextPage } from "next";
import { getTransactions } from "../types";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ data: getTransactions }> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anubi Digital Coding Interview</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <p className="mb-4">{"Your coding interview has just started. Show us what you are truly capable of!"}</p>

        <Image src={"/logo.png"} width={120} height={32} />

        <table className="w-full table-auto bg-black mt-8 mb-8">
          <thead>
            <tr className=" border-b border-b-black-extra">
              <th className="p-4 text-xl font-semibold font-sans tracking-wide">User</th>
              <th className="p-4 text-xl font-semibold font-sans tracking-wide">Nature</th>
              <th className="p-4 text-xl font-semibold font-sans tracking-wide">Amount</th>
              <th className="p-4 text-xl font-semibold font-sans tracking-wide">Assets</th>
              <th className="p-4 text-xl font-semibold font-sans tracking-wide">Created On</th>
            </tr>
          </thead>

          <tbody>
            {Object.values(data).map((item) => (
              <tr key={item.id}>
                <td className=" p-4 text-base border-b border-b-black-extra text-center font-serif font-bold">{item.user.id}</td>
                {item.nature.code === "Deposit" ? (
                  <td className="p-4  text-sm border-b border-b-black-extra text-center">
                    <span className="p-1.5 text-xs font-serif font-medium uppercase tracking-wider text-green-800 bg-green-200">{item.nature.code}</span>
                  </td>
                ) : (
                  <td className="p-4  text-sm border-b-black-extra border-b font-serif text-center text-blue-300">{item.nature.code}</td>
                )}

                {item.amount < 1 ? (
                  <td className="p-4 font-serif border-b-black-extra border-b  text-sm text-center text-red">{item.amount}</td>
                ) : (
                  <td className="p-4  text-sm border-b-black-extra text-center border-b text-green-300">{item.amount}</td>
                )}

                <td className="p-4  text-sm border-b-black-extra border-b   font-serif text-center">{item.asset}</td>
                <td className="p-4  text-sm border-b-black-extra border-b  font-serif  text-center">{item.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.anubidigital.com" target="_blank" rel="noopener noreferrer">
          Powered by {"Valentina Zanisi "}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={120} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3081/v1/transactions");

  return {
    props: {
      data,
    },
  };
};

export default Home;
