"use client";

import { useEffect, useState } from "react";

export default function ShoppingCartPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts("http://localhost:3000/api/section8_products");
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:3000/api/section8_categories");
    const data = await res.json();
    const list = data.categories || [];
    setCategories(["All Categories", ...list]);
  };

  const fetchProducts = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  };

  const onCategoryChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "All Categories") {
      fetchProducts("http://localhost:3000/api/section8_products");
    } else {
      fetchProducts(`http://localhost:3000/api/section8_products/${value}`);
    }
  };

  const addToCart = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/section8_products/productId/${id}`);
    const data = await res.json();
    setCartItems([...cartItems, data]);
    alert(`${data.title}\n has been Added to Shopping Cart`);
  };

  const deleteCartItem = (index: number) => {
    if (confirm("Are you sure you want to delete this item from your cart?")) {
      const updated = [...cartItems];
      updated.splice(index, 1);
      setCartItems(updated);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <header className="bg-red-600 text-white text-center py-4 rounded mb-4">
        <h2 className="text-xl font-bold">🛒 Shopping Cart Demo</h2>
      </header>

      <div className="flex gap-4">
        <div className="w-1/6">
          <label className="block mb-2 font-medium">Select a Category</label>
          <select onChange={onCategoryChanged} className="w-full p-2 border rounded">
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="w-7/12 h-[550px] overflow-y-auto flex flex-wrap gap-4">
          {products.map((product, idx) => (
            <div key={idx} className={`w-[200px] border rounded p-2 shadow-md`}>
              <img src={product.image} className="w-full h-[150px] object-contain" />
              <div className="h-[180px] mt-2">
                <p className="text-sm font-medium">{product.title}</p>
              </div>
              <div className="text-sm mt-2">
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Rating:</strong> ⭐ {product.rate} [{product.count}]</p>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="mt-2 w-full bg-red-600 text-white py-1 rounded"
              >
                 Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="w-1/4">
          <button
            onClick={() => setShowCart(!showCart)}
            className="w-full bg-red-600 text-white py-2 rounded"
          >
           [{cartItems.length}] Your Shopping Cart
          </button>

          {showCart && (
            <table className="w-full mt-4 table-auto text-sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Preview</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-1">{item.title}</td>
                    <td className="p-1"><img src={item.image} className="w-[50px] h-[50px]" /></td>
                    <td className="p-1">${item.price}</td>
                    <td className="p-1">
                      <button onClick={() => deleteCartItem(i)} className="text-red-600 font-bold">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
