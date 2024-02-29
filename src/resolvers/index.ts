import { postLinkResolver } from "./mutations/post-link";
import { feedResolver } from "./queries/feed";
import { infoResolver } from "./queries/info";

export const resolvers = {
  Query: {
    info: infoResolver,
    feed: feedResolver,
  },

  Mutation: {
    postLink: postLinkResolver,
  },
};
