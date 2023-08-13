import { PageProps } from "gatsby";
import React from "react";
import Layout from "@components/Layout";
import { graphql } from "gatsby";

const ProjectContent = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const ProjectTemplate: React.FC<PageProps> = ({ data }) => {
  
  const projectpage = data.prismicProjectItems;
  const alternateLanguages = projectpage.alternate_languages || [];
  const { lang, type, url } = projectpage || {};

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  };

  return (
    <Layout activeDocMeta={activeDoc}>
      <ProjectContent data={projectpage} />
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query pageQuery($id: String, $lang: String) {
    prismicProjectItems(id: { eq: $id }, lang: { eq: $lang }) {
      url
      type
      id
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        project_title {
          text
        }
        project_description {
          text
        }
      }
    }
  }
`;
