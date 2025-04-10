"use client";
import React, { useEffect, useState } from "react";

type Product = {
  productID: number;
  productName: string;
  quantity: number;
  unitsInStock: number;
  disContinued: boolean;
  cost: number;
};

type ProcessorCategory = {
  Category: string;
  Products: string[];
};

const UsingNgForWithFormElements: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [processors] = useState<ProcessorCategory[]>([
    { Category: "AMD", Products: ["Ryzen 3990", "Ryzen 3970", "Ryzen 3960", "Ryzen 3950"] },
    { Category: "Intel", Products: ["Xeon 8362", "Xeon 8358", "Xeon 8380"] },
  ]);

  useEffect(() => {
    setProducts([
      { productID: 1, productName: "AMD Ryzen 3990", quantity: 100, unitsInStock: 50, disContinued: false, cost: 3000 },
      { productID: 2, productName: "AMD Ryzen 3970", quantity: 100, unitsInStock: 60, disContinued: false, cost: 4000 },
      { productID: 3, productName: "AMD Ryzen 3960", quantity: 100, unitsInStock: 70, disContinued: false, cost: 5000 },
      { productID: 4, productName: "AMD Ryzen 3950", quantity: 100, unitsInStock: 80, disContinued: false, cost: 6000 },
      { productID: 5, productName: "AMD Ryzen 3940", quantity: 100, unitsInStock: 90, disContinued: false, cost: 7000 },
      { productID: 6, productName: "AMD Ryzen 3930", quantity: 100, unitsInStock: 15, disContinued: false, cost: 8000 },
      { productID: 7, productName: "AMD Ryzen 3920", quantity: 100, unitsInStock: 25, disContinued: false, cost: 9000 },
      { productID: 8, productName: "AMD Ryzen 3910", quantity: 100, unitsInStock: 35, disContinued: false, cost: 10000 },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Products List</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">ID</th>
              <th className="text-left p-3 border-b">Name</th>
              <th className="text-left p-3 border-b">Quantity</th>
              <th className="text-left p-3 border-b">In Stock</th>
              <th className="text-left p-3 border-b">Discontinued</th>
              <th className="text-left p-3 border-b">Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productID} className="hover:bg-gray-50 transition">
                <td className="p-3 border-b">{product.productID}</td>
                <td className="p-3 border-b">{product.productName}</td>
                <td className="p-3 border-b">{product.quantity}</td>
                <td className="p-3 border-b">{product.unitsInStock}</td>
                <td className="p-3 border-b">{product.disContinued ? "Yes" : "No"}</td>
                <td className="p-3 border-b">${product.cost.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Processor Categories</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {processors.map((cat, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="font-bold text-lg mb-2">{cat.Category}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {cat.Products.map((prod, idx) => (
                <li key={idx}>{prod}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsingNgForWithFormElements;
