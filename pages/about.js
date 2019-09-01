import Link from "next/link";
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <Link href="/about" title="About Page">
      <a>About Page</a>
    </Link>
    <p>i'm the about page</p>
  </Layout>
);

export default About;
