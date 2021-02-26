import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            data-ad-client="ca-pub-7162519541437651"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-52TJYDVGQJ"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-52TJYDVGQJ');`,
            }}
          ></script>
          <meta name="title" content="CS1000" />
          <meta
            name="description"
            content="A reference site for a beginner, to gain insight into various fields/subjects present around CS/Software engineering."
          />
          <meta
            name="keywords"
            content="cs1000, vercel, cs, computer, science, education, reference, material, bookmark, list, curriculum, undergraduate, degree, knowledge, resource, cs1000.vercel.app, engineer, engineering, software, web, developer, development, beginner, student, lectures"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
