import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { server } from "../config/index";
async function return_url(context) {
  console.log(context.req.rawHeaders[1]);
  if (process.env.NODE_ENV === "production") {
    return `https://${context.req.rawHeaders[1]}`;
  } else if (process.env.NODE_ENV === "development") {
    return `http://${context.req.rawHeaders[1]}`;
  } else if (process.env.NODE_ENV === "test") {
    return `https://${context.req.rawHeaders[1]}`;
  }
}
export async function getServerSideProps(context) {
  const url = await return_url(context);
  const responce = await fetch(`${url}/api/hello`);
  const data = await responce.json();

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
