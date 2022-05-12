import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head />
        <body className="debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
