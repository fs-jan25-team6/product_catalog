import { useMemo } from 'react';
import { Product } from '../types/Product';
import { SortBy } from '../enums/SortBy';

export function useFilteredProducts(
  products: Product[],
  category: string,
  query: string,
  sortBy: string,
): Product[] {
  return useMemo(() => {
    const result = products.filter(
      p =>
        p.category === category &&
        p.name.toLowerCase().includes(query.toLowerCase()),
    );

    switch (sortBy) {
      case SortBy.Alpha:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortBy.Cheap:
        result.sort((a, b) => a.price - b.price);
        break;
      case SortBy.Newest:
      default:
        result.sort((a, b) => b.year - a.year);
        break;
    }

    return result;
  }, [products, category, query, sortBy]);
}
