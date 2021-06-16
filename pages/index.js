import Head from "next/head";
import App from "../components/App";

export default function Home({ data, token, e }) {
  if (e)
    return (
      <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <h1>
          Wayback machine is not responding at the moment. Please try again
          after some time.
        </h1>
      </div>
    );
  return (
    <div className="p-3 min-vh-100">
      <Head>
        <title>CS1000</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App data={data} token={token} />
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const URLAPI = `https://web.archive.org/__wb/calendarcaptures/2?url=https://laconicml.com/computer-science-curriculum-youtube-videos/&date=${new Date().getFullYear()}`;
    const getTimeMachineAPIResponse = await fetch(URLAPI);
    const newURL = (latestTimeMachineSnapshot) =>
      `https://web.archive.org/web/${latestTimeMachineSnapshot}/https://laconicml.com/computer-science-curriculum-youtube-videos/`;
    const { items } = await getTimeMachineAPIResponse.json();
    const latestTimeMachineSnapshotId = items[items.length - 1][0];
    const r = await fetch(newURL(latestTimeMachineSnapshotId));
    const j = await r.text();
    return {
      data: j,
      token: latestTimeMachineSnapshotId,
      e: false,
    };
  } catch (e) {
    return {
      data: null,
      token: null,
      e: true,
    };
  }
};
