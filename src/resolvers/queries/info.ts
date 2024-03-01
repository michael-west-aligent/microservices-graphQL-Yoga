import { QueryResolvers } from "../../generated/graphql";

export const infoResolver: QueryResolvers["info"] = (
  _root,
  _args,
  _context,
  _info
) => `This is the API of a Hackernews Clone`;
