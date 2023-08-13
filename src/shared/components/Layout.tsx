/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect } from "react";
import Header from "@components/Header";
import "../../styles/global.css";
import { useGlobal } from "@contexts/GlobalContext";
import Announcement from "@components/Announcement";
import MobileMenu from "@components/MobileMenu";
import Seo from "@components/Seo";
import { Slice, graphql, useStaticQuery } from "gatsby";
import Header2 from "./Header2";
import Header3 from "./Header3";
import { useWasSeen } from "@utils/useWasSeen";
import { StaticImage } from "gatsby-plugin-image";
import MainContent from "./MainContent";
import { ReactLenis } from '@studio-freight/react-lenis'
import { TransitionProvider } from "@contexts/TransitionContext";


const Layout = ({ children, title, description, activeDocMeta, links }: any) => {
  const { mobileMenuActive } = useGlobal();
  return (
    <>
      <Seo title={title} description={description} />
      <ReactLenis root>
        <TransitionProvider>
          <Header3 />
          <div className="w-full min-h-screen max-w-screen-xl mx-auto px-12 flex flex-col">
            <main className="flex-1 py-20 overflow-auto my-20">
              {children}
            </main>
          </div>
        </TransitionProvider>
      </ReactLenis>
      {/* </div> */}
    </>
  );
};

export default Layout;

