const { defaultLanguage } = require("../../prismic-configuration");

/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 *
 * @type import('@prismicio/helpers').LinkResolverFunction
 */
exports.linkResolver = (doc: any, docc: any) => {

  switch (doc.type) {
    case "home": {
      return doc.lang === defaultLanguage ? "/" : `/${doc.lang}`;
    }

    case 'project_items': {
      return doc.lang === defaultLanguage
        ? `/projects/${doc.id}`
        : `/projects/${doc.id}/${doc.lang}`
    }

    case "projects": {
      return doc.lang === defaultLanguage ? "/projects" : `/projects/${doc.lang}`
    }
    case "services": {
      return doc.lang === defaultLanguage ? "/services" : `/services/${doc.lang}`
    }

    default:
      return "/";
  }
};
