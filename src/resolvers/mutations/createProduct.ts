import axios from "axios";
import {
  MutationCreateProductArgs,
  MutationResolvers,
  Product,
  ProductType,
} from "../../generated/graphql";

interface BcProductResponse {
  id: number;
  name: string;
  sku: string;
  weight: number;
  price: number;
  type: ProductType;
}

const headers = {
  "X-Auth-Token": "2dwb7v48ai89ng29a4miz3dyah2bxi1",
};
const STORE_HASH = "xxazhvt7gd";

const transformProduct = (bcProduct: BcProductResponse): Product => {
  const { id, name, sku, price, weight, type } = bcProduct;
  return {
    product_id: String(id),
    name,
    sku,
    mass: weight,
    cost: price,
    type,
  };
};

export const createProductResolver: MutationResolvers["createProduct"] = async (
  _root,
  args,
  _context,
  _info
) => {
  // Send user input/args to BC, often this will need to be transformed too
  const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/catalog/products`;

  const bcProduct = await axios.post<
    MutationCreateProductArgs,
    { data: { data: BcProductResponse } }
  >(url, args, { headers });

  // Transform response from BC to match our schema
  const transformedProduct = transformProduct(bcProduct.data.data);

  return transformedProduct;
};
