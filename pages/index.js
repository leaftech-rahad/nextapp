import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { server } from "../config/index";
export async function getServerSideProps() {
  const res = await fetch(`${server}/api/hello`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
