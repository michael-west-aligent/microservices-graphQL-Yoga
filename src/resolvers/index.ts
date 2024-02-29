import { postLinkResolver } from "./mutations/post-link";
import { countriesResolver } from "./queries/countries";
import { feedResolver } from "./queries/feed";
import { infoResolver } from "./queries/info";

export const resolvers = {
  Query: {
    info: infoResolver,
    feed: feedResolver,
    countries: countriesResolver,
  },

  Mutation: {
    postLink: postLinkResolver,
  },
};
