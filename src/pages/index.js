import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Always Learning">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query blogLoop {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          updated(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
