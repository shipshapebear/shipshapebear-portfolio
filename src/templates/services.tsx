import React from 'react'
import Layout from '../shared/components/Layout'
import { HeadFC, graphql } from 'gatsby'
import Seo from '@components/Seo';

const Services = ({ data }) => {
    const pageData = data.prismicServices;
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
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    </Layout>;
}


export const query = graphql`
  query projectPageQuery($lang: String) {
    prismicServices(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
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

export const Head = () => <Seo title="Services" />

export default Services

