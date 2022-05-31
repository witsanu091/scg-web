import Head from "next/head";
import SimpleLayout from "../components/layout/simple.jsx";

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <Head>
        <title>Next and Bootstrap</title>
        <meta
          name="description"
          content="A demo about NextJS and Bootstrap 5"
        />
      </Head>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Subscribe to GyanBlog</h1>
          <p className="lead text-muted">Learn and Share</p>
        </div>
      </section>
    </SimpleLayout>
  );
}
