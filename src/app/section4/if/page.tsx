"use client"
import { useEffect, useState } from "react";
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

export default function IfDirective({ name, loggedIn }: { name: string; loggedIn: boolean }) {
    const [data] = useState<any>({ name: 'James Anderson', isVisible: true, loggedIn: true, countryCode: 'US', workExperience: 36 });
    const [message, setMessage] = useState<any>('');
    const [message1, setMessage1] = useState<any>('');
    const [products, setProducts] = useState<Product[]>([]);
    const [tableHeight] = useState('200px');
    const [processors] = useState<ProcessorCategory[]>([
        { Category: "AMD", Products: ["Ryzen 3990", "Ryzen 3970", "Ryzen 3960", "Ryzen 3950"] },
        { Category: "Intel", Products: ["Xeon 8362", "Xeon 8358", "Xeon 8380"] },
    ]);

    useEffect(() => {
        switch (data?.countryCode) {
            case 'IN':
                setMessage('Currency Code is INR');
                break;
            case 'AUS':
                setMessage('Currency Code is AUD');
                break;
            case 'US':
                setMessage('Currency Code is USD');
                break;
            case 'UK':
                setMessage('Currency Code is GBP');
                break;
            default:
                setMessage('Please Specify a Valid Country Code');
        }

        switch (data.loggedIn) {
            case 'true':
                setMessage1(`Welcome ${data.name}`)
                break;
            default:
                setMessage1(`Please Login`)
        }

        getClassDynamically();

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
    }, [])

    const getClassDynamically = () => {
        if (products.length == 8) {
            return ("bg-green-500");
        }
        else {
            return ("bg-yellow-500");
        }
    }

    const getClassMap = (id: number) => {
        const product = products[id];
        if (!product) return '';
        return [
            product.productName === 'AMD Ryzen 3950' ? 'text-center bg-red-600' : '',
            product.cost <= 7000 ? 'bg-yellow-400' : '',
        ]
            .filter(Boolean)
            .join(' ');
    };

    const getStylesDynamically = (id: number) => {
        const product = products[id];
        if (!product) return {};
        return {
            color: product.cost > 7000 ? 'red' : 'black',
            fontWeight: 'bold',
            fontSize: '1.25rem'
        };
    };



    return (
        <>
            <h1 className="bg-blue-200 p-2 mt-1 text-black">
                {data?.loggedIn
                    ? `Hi ${data?.name}, You are logged in Currently!`
                    : 'You are browsing our site as a Guest! Please Login!'}
            </h1>
            <h1 className="bg-blue-200 p-2 mt-1 text-black">
                {data.name == 'James Anderson'
                    ? `Hi ${data?.name}, You are also part of our elite players list!!`
                    : ''}
            </h1>
            <h1 className="bg-blue-200 p-2 mt-1 text-black">
                {data.workExperience > 30 && data.workExperience < 40
                    ? `Hi ${data?.name}, You are eligible for the post of Senior Developer!!`
                    : ''}
            </h1>
            <h1 className="bg-blue-200 p-2 mt-1 text-black">{message}</h1>
            <h1 className="bg-blue-200 p-2 mt-1 text-black">{message1}</h1>
            <table className="table-auto w-full text-white">
                <thead>
                    <tr>
                        <th>Slno</th>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>UnitsInStock</th>
                        <th>Discontinued</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        const isOdd = i % 2 !== 0;
                        const isFirst = i === 0;
                        const isLast = i === products.length - 1;

                        const rowClass = `${isFirst || isLast
                            ? 'bg-yellow-500'
                            : isOdd
                                ? 'bg-blue-700'
                                : 'bg-blue-500'
                            }`;

                        return (
                            <tr key={product.productID} className={rowClass}>
                                <td>{i + 1}</td>
                                <td>{product.productID}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.unitsInStock}</td>
                                <td>{product.disContinued ? 'Yes' : 'No'}</td>
                                <td>{product.cost}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={getClassDynamically()}>
                <h1>Currently we are selling {products.length} products.</h1>
            </div>
            <div className={`text-black m-3 p-3 ${getClassDynamically()}`}>
                <h1>Currently we are selling {products.length} products.</h1>
            </div>
            {products.length > 0 && (
                <>
                    <div className={`p-2 ${getClassMap(4)}`}>
                        Cost of {products[4].productName} is {products[4].cost}
                    </div>
                    <div className={`p-2 ${getClassMap(3)}`}>
                        Cost of {products[3].productName} is {products[3].cost}
                    </div>
                </>
            )}
            <br />
            <div className="space-y-4 p-4">
                <div>
                    <label className="block font-medium mb-1">ProductID</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.productID ?? 'None'}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Product Name</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.productName ?? 'None'}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Quantity</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.quantity ?? 'None'}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Units In Stock</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.unitsInStock ?? 'None'}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Discontinued</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.disContinued ? 'Yes' : 'No'}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Cost</label>
                    <input
                        className="form-input w-full border border-gray-300 rounded p-2"
                        value={products[1]?.cost ?? 'None'}
                        readOnly
                    />
                </div>
            </div>
            <br />
            <table className="table-auto w-full border border-gray-300 text-left">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 border">Product ID</th>
                        <th className="px-4 py-2 border">Product Name</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Units In Stock</th>
                        <th className="px-4 py-2 border">Discontinued</th>
                        <th className="px-4 py-2 border">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border">{products[1]?.productID ?? 'N/A'}</td>
                        <td className="px-4 py-2 border">{products[1]?.productName ?? 'N/A'}</td>
                        <td className="px-4 py-2 border">{products[1]?.quantity ?? 'N/A'}</td>
                        <td className="px-4 py-2 border">{products[1]?.unitsInStock ?? 'N/A'}</td>
                        <td className="px-4 py-2 border">{products[1]?.disContinued ? 'Yes' : 'No'}</td>
                        <td className="px-4 py-2 border">{products[1]?.cost ?? 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="table-auto w-full border border-black">
                <thead>
                    <tr>
                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center" colSpan={products.length}>
                            {products[1]?.productName}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table style={{ height: tableHeight }} className="border-4 border-black w-full">
                <thead>
                    <tr>
                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center" colSpan={products.length}>
                            {products[1]?.productName}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            {products.length > 0 && (
                <>
            <div className="text-white m-2">
                <div className="p-2 bg-yellow-500">
                    The <span style={getStylesDynamically(4)}>Fourth</span> product is {products[4]?.productName}.
                </div>
            </div>

            <div className="text-white m-2">
                <div className="p-2 bg-yellow-500">
                    The <span style={getStylesDynamically(3)}>Third</span> product is {products[3]?.productName}.
                </div>
            </div>
            </>
            )}




        </>

    )

}