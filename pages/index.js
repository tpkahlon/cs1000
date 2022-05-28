import Head from "next/head";
import App from "../components/App";
import { GET_PAGE } from "../common";

export default function Home({ data, token, e }) {
  return (
    <div className="p-3 min-vh-100">
      <Head>
        <title>CS1000</title>
        <link
          rel="icon"
          href="https://pics.freeicons.io/uploads/icons/png/15284412521598894797-512.png"
        />
      </Head>
      {e ? (
        <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
          <h1>
            Wayback machine is not responding at the moment. Please try again
            after some time.
          </h1>
        </div>
      ) : (
        <App data={data} token={token} />
      )}
    </div>
  );
}

Home.getInitialProps = async () => {
  const { data, token, e } = await GET_PAGE();
  return {
    data: data,
    token: token,
    e: e,
  };
};
