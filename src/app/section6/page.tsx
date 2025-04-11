'use client';
import { useEffect, useState } from 'react';
import moment from 'moment';

const deliveryStatus: Record<string, string> = {
  Hyderabad: 'Same Day Delivery',
  Mumbai: 'One Day Delivery',
  Delhi: 'Delivery in 2 Days',
  Chennai: 'Delivery in 3 Days',
  other: 'Maximum delivery time is 7 days..',
};

const shoppingCartNotification = (count: number) => {
  switch (count) {
    case 0:
      return 'Shopping Cart is Empty!';
    case 1:
      return 'One product found in Shopping Cart.';
    case 2:
      return 'Two products found in Shopping Cart.';
    case 3:
      return 'Three products found in Shopping Cart.';
    default:
      return `${count} products found in Shopping Cart.`;
  }
};

export default function PipesDemo() {
  const [products, setProducts] = useState<any[]>([]);
  const [customDate] = useState(new Date('2021-09-20T08:50:22+05:30'));
  const [cartItems] = useState([
    'AMD Ryzen 3970',
    'AMD Ryzen 3990',
    'AMD Ryzen 3950',
  ]);

  useEffect(() => {
    setProducts([
      { productID: 1, productName: "AMD Ryzen 3990", quantity: 100, unitsInStock: 0.5, disContinued: false, cost: 3000, launchDate: '2020-05-20', City: "Hyderabad" },
      { productID: 2, productName: "AMD Ryzen 3970", quantity: 100, unitsInStock: 0.6, disContinued: false, cost: 4000, launchDate: '2020-05-20', City: "Delhi" },
      { productID: 3, productName: "AMD Ryzen 3960", quantity: 100, unitsInStock: 0.7, disContinued: false, cost: 5000, launchDate: '2020-05-20', City: "Hyderabad" },
      { productID: 4, productName: "AMD Ryzen 3950", quantity: 100, unitsInStock: 0.8, disContinued: false, cost: 6000, launchDate: '2020-05-20', City: "Mumbai" },
      { productID: 5, productName: "AMD Ryzen 3940", quantity: 100, unitsInStock: 0.9, disContinued: false, cost: 7000, launchDate: '2020-05-20', City: "Chennai" },
      { productID: 6, productName: "AMD Ryzen 3930", quantity: 100, unitsInStock: 0.15, disContinued: false, cost: 8000, launchDate: '2020-05-20', City: "Hyderabad" },
      { productID: 7, productName: "AMD Ryzen 3920", quantity: 100, unitsInStock: 0.25, disContinued: false, cost: 9000, launchDate: '2020-05-20', City: "Delhi" },
      { productID: 8, productName: "AMD Ryzen 3910", quantity: 100, unitsInStock: 0.35, disContinued: false, cost: 10000, launchDate: '2020-05-20', City: "Mumbai" },
    ]);
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Products Table</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th>Slno</th>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>UnitsInStock</th>
            <th>Discontinued</th>
            <th>Cost</th>
            <th>Launch Date</th>
            <th>City</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i} className="text-center border-t">
              <td>{i + 1}</td>
              <td>{product.productID}</td>
              <td className="capitalize">{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{(product.unitsInStock * 100).toFixed(0)}%</td>
              <td>{product.disContinued ? "Yes" : "No"}</td>
              <td>${product.cost.toFixed(2)}</td>
              <td>{new Date(product.launchDate).toDateString()}</td>
              <td>{product.City}</td>
              <td>{deliveryStatus[product.City] || deliveryStatus['other']}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="text-xl font-semibold">Date Parts</h2>
        <div className="space-y-1 text-sm">
          <p>Day: {moment(customDate).format('D')}</p>
          <p>Month: {moment(customDate).format('M')}</p>
          <p>Year: {moment(customDate).format('YYYY')}</p>
          <p>Seconds: {moment(customDate).format('s')}</p>
          <p>Minutes: {moment(customDate).format('m')}</p>
          <p>Hours: {moment(customDate).format('h')}</p>
          <p>Weekday: {moment(customDate).format('ddd')}</p>
          <p>Timezone: {moment(customDate).format('ZZ')}</p>
          <p>Full Format: {moment(customDate).format('DD:MMM:YYYY hh-mm-ss ZZ')}</p>
        </div>
      </div>

      <div className="bg-blue-100 p-4 rounded-md">
        <h3 className="text-lg font-medium">Products JSON</h3>
        <pre className="text-xs">{JSON.stringify(products, null, 2)}</pre>
      </div>

      <table className="table-auto w-full mt-8 border border-gray-200">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(products[0] || {}).map(([key, value], i) => (
            <tr key={i}>
              <td className="font-medium">{key}</td>
              <td><pre className="text-xs">{JSON.stringify(value)}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-blue-200 text-blue-900 p-3 rounded">
        <div>There are {shoppingCartNotification(cartItems.length)}</div>
      </div>
    </div>
  );
}
