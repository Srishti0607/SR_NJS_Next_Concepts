'use client';
import { useState } from 'react';

export default function CurrencyChecker() {
  const [countryCode, setCountryCode] = useState('');

  const getMessage = () => {
    if (countryCode === '') {
      return "You haven't entered Country Code Yet!";
    } else if (countryCode === 'IND') {
      return "India's Currency Code is INR";
    } else if (countryCode === 'USA') {
      return "USA's Currency Code is USD";
    } else if (countryCode === 'UK') {
      return "UK's Currency Code is GBP";
    } else {
      return 'Invalid Country Code Entered..';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border border-gray-400 px-3 py-2 rounded mr-2"
          placeholder="Enter Country Code"
        />
        <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded" onClick={() =>getMessage()}>
          Get Currency Details
        </button>
      </div>

      <div className="text-lg font-semibold text-gray-800 mt-4">
        {getMessage()}
      </div>
    </div>
  );
}
