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
          href="https://image.flaticon.com/icons/png/512/3964/3964036.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"tpkahlon",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
          }}
        ></script>
        <meta name="title" content="CS1000" />
        <meta
          name="description"
          content="A reference site for a beginner, to gain insight into various subjects present around CS and Software engineering."
        />
        <meta
          name="keywords"
          content="cs1000, vercel, cs, computer, science, education, reference, material, bookmark, list, curriculum, undergraduate, degree, knowledge, resource, cs1000.vercel.app, engineer, engineering, software, web, developer, development, beginner, student, lectures"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
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
