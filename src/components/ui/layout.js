import * as React from "react";
import Footer from "./footer";
import Header from "./header";
//  import { useStaticQuery, graphql } from "gatsby"

//  import Header from "./header"
//  import Footer from "./footer"
// import "./layout.css"

const Layout = ({ children }) => {
  //    const data = useStaticQuery(graphql`
  //      query GetCategories {
  //        allStrapiCategory {
  //          edges {
  //            node {
  //              name
  //              strapiId
  //            }
  //          }
  //        }
  //      }
  //    `)

  return (
    <>
      {/* <Header categories={data.allStrapiCategory.edges} /> */}
      {/* <div style={{ marginBottom: "10rem" }} /> */}
      {/* <div /> */}
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
