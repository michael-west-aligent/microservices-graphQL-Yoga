import { links } from "../../mock/data";
import { Link } from "../../types";

export const postLinkResolver = (
  _root: unknown,
  args: { description: string; url: string }
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
