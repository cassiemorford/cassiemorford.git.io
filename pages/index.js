import Link from "next/link";
import Layout from "../components/Layout";
import "../scss/main.scss";

const Index = () => (
  <Layout>
    <Link href="/about" title="About Page">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </Layout>
);

export default Index;
