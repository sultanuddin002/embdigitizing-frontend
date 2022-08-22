import * as React from "react";
import Header from "./header";
import HeaderTwo from "./header-two";
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
      <HeaderTwo />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
