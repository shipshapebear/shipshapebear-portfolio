import React from 'react'
import Layout from '../shared/components/Layout'
import { HeadFC, graphql } from 'gatsby'
import Seo from '@components/Seo';
import MainContent from '@components/ProjectContent';

const Projects = ({ data }) => {
  const pageData = data.prismicProjects;
  const alternateLanguages = pageData.alternate_languages || [];
  const { lang, type, url } = pageData || {};

  const links = data.prismicMenu.data

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  };

  return <Layout activeDocMeta={activeDoc} links={links}>

    <MainContent data={data} />
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  </Layout>;
}


export const query = graphql`
  query projectPageQuery($lang: String) {
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

export const Head = () => <Seo title="Projects" />

export default Projects

