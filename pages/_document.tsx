import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;0,600;0,700;1,100;1,300;1,600;1,700&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;0,600;0,700;1,100;1,300;1,600;1,700&family=Spline+Sans+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body 
          // className="debug-screens"
          >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
