import path, { resolve } from "path";
import { GatsbyNode } from "gatsby";

const { defaultLanguage } = require("./prismic-configuration");

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage, createSlice } = actions;

  const { data }: any = await graphql(`
    query TypegenPage {
      allPrismicProjectItems {
        nodes {
          id
          lang
          prismicId
          data {
            project_title {
              text
            }
          }
          alternate_languages {
            lang
          }
        }
      }
      allPrismicProjects {
        nodes {
          id
          lang
          url
          alternate_languages {
            lang
          }
        }
      }
      allPrismicServices {
        nodes {
          id
          lang
          url
          alternate_languages {
            lang
          }
        }
      }
      allPrismicHome {
        nodes {
          id
          lang
          url
        }
      }
    }
  `);

  data.allPrismicProjectItems.nodes.forEach((page: any) => {
    const pageName = page.data.project_title.text
      .replace(/\s+/g, "-")
      .toLowerCase();
    createPage({
      path:
        page.lang === defaultLanguage
          ? `/projects/${page.prismicId}`
          : `/projects/${page.prismicId}/${page.lang}`,
      component: resolve(__dirname, "src/templates/test.tsx"),
      context: {
        id: page.id,
        lang: page.lang,
        slug: pageName,
      },
    });
  });

  data.allPrismicProjects.nodes.forEach((page: any) => {
    createPage({
      path:
        page.lang === defaultLanguage ? `/projects` : `/projects/${page.lang}`,
      component: path.resolve(__dirname, "src/templates/projects.tsx"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });
  data.allPrismicServices.nodes.forEach((page: any) => {
    createPage({
      path:
        page.lang === defaultLanguage ? `/services` : `/services/${page.lang}`,
      component: path.resolve(__dirname, "src/templates/services.tsx"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });

  data.allPrismicHome.nodes.forEach((page: any) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/homepage.tsx"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    });
  });

  // type SliceType = {
  //   id: string;
  //   component: string;
  // };

  // const slices: SliceType[] = [
  //   {
  //     id: `header`,
  //     component: path.resolve(`./src/shared/components/Header.tsx`),
  //   },
  //   {
  //     id: `footer`,
  //     component: path.resolve(`./src/shared/components/Footer.tsx`),
  //   },
  // ];

  // slices.forEach((slice: SliceType) => {
  //   createSlice({
  //     id: slice.id,
  //     component: slice.component,
  //   });
  // });
};
