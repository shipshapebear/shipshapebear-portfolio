import React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "@components/Layout";
import HeroBanner from "@sections/HeroBanner";
import Seo from "@components/Seo";
import { SliceZone } from '@prismicio/react'
import AboutContent from "@components/AboutContent";
import ProjectContent from "@components/ProjectContent";


const HomepageTemplate = ({ data }) => {
  const homepage = data.prismicHome;
  const alternateLanguages = homepage.alternate_languages || [];
  const { lang, type, url } = homepage || {};
  const links = data.prismicMenu.data

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  };

  return <Layout activeDocMeta={activeDoc} links={links}>
    <HeroBanner data={data} />
    {/* <AboutContent /> */}
    <ProjectContent data={data} />
  </Layout>;
};

export const query = graphql`
  query homepageQuery($lang: String) {
    prismicHome(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        banner_title {
          text
        }
        banner_widgets {
          widget_description {
            text
          }
          widget_icon {
            gatsbyImageData
          }
          widget_title {
            text
          }
        }
      }
    }
    prismicProjects(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
          project_items {
          project_description {
            text
          }
          project_image {
            gatsbyImageData
            url
          }
          project_title {
            text
          }
        }
      }
    }
    prismicMenu(lang: {eq: $lang}) {
    type
    lang
    data {
      header_links {
        label {
          richText
        }
        link {
          id
          url
          type
        }
      }
    }
  }
  }
`;

export const Head = () => <Seo title="Home" />


export default HomepageTemplate;
