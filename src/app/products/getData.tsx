import { ProductsListItem, ProductItem } from "../../lib/productsListItem";

export async function getData(): Promise<ProductItem[]> {
  // позже заменишь на запрос в базу или API
  return ProductsListItem;
}
