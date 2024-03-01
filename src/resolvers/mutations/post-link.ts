import { links } from "../../mock/data";
import { Link, MutationResolvers } from "../../generated/graphql";

export const postLinkResolver: MutationResolvers["postLink"] = async (
  _root,
  args,
  _context,
  _info
) => {
  let idCount = links.length;

  const link: Link = {
    id: `link-${idCount}`,
    description: args.description,
    url: args.url,
  };

  links.push(link);

  return link;
};
