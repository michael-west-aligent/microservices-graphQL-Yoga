import { links } from "../../mock/data";
import { QueryResolvers } from "../../generated/graphql";

export const feedResolver: QueryResolvers["feed"] = (
  _root,
  _args,
  _context,
  _info
) => links;
