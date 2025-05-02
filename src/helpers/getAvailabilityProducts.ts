import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDetails';

type VariantEntry = {
  product: Product | { itemId: string; color: string; capacity: string }; //fallback if not found
  available: boolean;
};

type VariantOptions = {
  colorOptions: { color: string; available: boolean }[];
  capacityOptions: { capacity: string; available: boolean }[];
};

export const getVariantOptions = (
  details: ProductDetails,
  products: Product[],
): VariantOptions => {
  const productMap = new Map(products.map(p => [p.itemId.toLowerCase(), p]));

  const variantEntries: VariantEntry[] = [];

  for (const color of details.colorsAvailable) {
    for (const capacity of details.capacityAvailable) {
      const itemId =
        `${details.namespaceId}-${capacity}-${color}`.toLowerCase();
      const existingProduct = productMap.get(itemId);
      variantEntries.push({
        product: existingProduct ?? { itemId, color, capacity },
        available: !!existingProduct,
      });
    }
  }

  const colorOptions = details.colorsAvailable.map(color => {
    const available = variantEntries.some(
      v =>
        v.product.color === color &&
        v.product.capacity === details.capacity &&
        v.available,
    );
    return { color, available };
  });

  const capacityOptions = details.capacityAvailable.map(capacity => {
    const available = variantEntries.some(
      v =>
        v.product.capacity === capacity &&
        v.product.color === details.color &&
        v.available,
    );
    return { capacity, available };
  });

  return { colorOptions, capacityOptions };
};
