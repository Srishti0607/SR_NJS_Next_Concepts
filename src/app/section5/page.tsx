'use client';

import { useState } from 'react';

export default function ProductForm() {
  const [product, setProduct] = useState({
    productID: 0,
    productName: '',
    cost: 0,
    quantity: 0,
    billAmount: 0,
    discount: 0,
    netBillAmount: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const doCalculations = () => {
    const cost = product.cost || 0;
    const quantity = product.quantity || 0;

    const billAmount = cost * quantity;
    const discount = billAmount > 1000 ? billAmount * 0.1 : 0;
    const netBillAmount = billAmount - discount;

    setProduct(prev => ({
      ...prev,
      billAmount: billAmount,
      discount: discount,
      netBillAmount: netBillAmount
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Form Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Product Form</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Product ID</label>
              <input type="text" name="productID" value={product.productID} onChange={handleChange} className="form-input w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold">Product Name</label>
              <input type="text" name="productName" value={product.productName} onChange={handleChange} className="form-input w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold">Cost</label>
              <input type="text" name="cost" value={product.cost} onChange={handleChange} className="form-input w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold">Quantity</label>
              <input type="text" name="quantity" value={product.quantity} onChange={handleChange} className="form-input w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold">Bill Amount</label>
              <input type="text" name="billAmount" value={product.billAmount} readOnly className="form-input w-full border rounded px-3 py-2 bg-gray-100" />
            </div>

            <div>
              <label className="block font-semibold">Discount</label>
              <input type="text" name="discount" value={product.discount} readOnly className="form-input w-full border rounded px-3 py-2 bg-gray-100" />
            </div>

            <div>
              <label className="block font-semibold">Net Bill Amount</label>
              <input type="text" name="netBillAmount" value={product.netBillAmount} readOnly className="form-input w-full border rounded px-3 py-2 bg-gray-100" />
            </div>

            <button onClick={doCalculations} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Product Details</h3>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Product ID</dt>
              <dd>{product.productID}</dd>
            </div>
            <div>
              <dt className="font-semibold">Product Name</dt>
              <dd>{product.productName}</dd>
            </div>
            <div>
              <dt className="font-semibold">Cost</dt>
              <dd>{product.cost}</dd>
            </div>
            <div>
              <dt className="font-semibold">Quantity</dt>
              <dd>{product.quantity}</dd>
            </div>
            <div>
              <dt className="font-semibold">Bill Amount</dt>
              <dd>{product.billAmount}</dd>
            </div>
            <div>
              <dt className="font-semibold">Net Bill Amount</dt>
              <dd>{product.netBillAmount}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-10">
        <h4 className="text-lg font-semibold mb-2">JSON Output</h4>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(product, null, 2)}</pre>
      </div>
    </div>
  );
}
