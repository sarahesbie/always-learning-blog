import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  sidebar,
  content,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      {/* <header>{data.site.siteMetadata.title}</header> */}{" "}
      <div className={sidebar}>
        <header>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}></Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className={content}>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
