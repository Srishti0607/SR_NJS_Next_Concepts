'use client'; 

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  const loadCategories = async () => {
    const res = await fetch('http://localhost:3000/api/section8_categories');
    const data = await res.json();
    const categoriesArray = data.categories || [];
    categoriesArray.unshift('All Categories');
    setCategories(categoriesArray);
  };

  const loadProducts = async (category = 'All Categories') => {
    const categoryParam = category !== 'All Categories' ? `/${category}` : '';
    const res = await fetch(`http://localhost:3000/api/section8_products${categoryParam}`);
    const data = await res.json();
    setProducts(data);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    loadProducts(category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          className="border border-gray-300 p-2 rounded"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Preview</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
