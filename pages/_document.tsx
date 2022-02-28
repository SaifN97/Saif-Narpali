import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    console.log("document");
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/me.ico"
            type="image/x-icon"
            className="rounded-full"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
            rel="stylesheet"
          />
          <title>Saif Narpali | Web Developer</title>
        </Head>
        <body className="bg-fixed bg-gradient-to-tr from-slate-500 to-teal-400 dark:bg-gradient-to-tl dark:from-black dark:to-black-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
