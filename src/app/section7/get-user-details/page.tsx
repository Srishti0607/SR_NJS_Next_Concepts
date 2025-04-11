'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  name: { firstname: string; lastname: string };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
};

export default function GetUserDetails() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Show Address Details');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  const toggleDisplay = () => {
    setIsVisible(prev => !prev);
    setButtonText(prev => (prev === 'Show Address Details' ? 'Hide Address Details' : 'Show Address Details'));
  };

  const goToPreviousUser = () => {
    setUserId(prev => Math.max(prev - 1, 1));
  };

  const goToNextUser = () => {
    setUserId(prev => prev + 1);
  };

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-white border shadow rounded-lg overflow-hidden w-full md:w-3/4">
            <div className="bg-gray-100 p-4 text-center" style={{ height: '300px' }}>
              <p className="font-semibold text-lg mb-2">User Name: {user.username}</p>
              <img
                src={`https://i.pravatar.cc/200?img=${user.id}`}
                className="mx-auto rounded"
                height={200}
                alt="User"
              />
            </div>
            <div className="p-4">
              <dl>
                <dt className="font-medium">Email</dt>
                <dd className="mb-2">{user.email}</dd>
                <dt className="font-medium">First Name</dt>
                <dd className="mb-2">{user.name.firstname}</dd>
                <dt className="font-medium">Last Name</dt>
                <dd className="mb-2">{user.name.lastname}</dd>
                <dt className="font-medium">Phone</dt>
                <dd className="mb-2">{user.phone}</dd>
              </dl>
            </div>
            <div className="flex flex-wrap justify-between p-4 gap-2">
              <button
                onClick={goToPreviousUser}
                className="bg-red-600 text-white py-2 px-4 rounded disabled:opacity-50"
                disabled={userId === 1}
              >
                ← Previous User
              </button>
              <button
                onClick={goToNextUser}
                className="bg-red-600 text-white py-2 px-4 rounded"
              >
                Next User →
              </button>
              <button
                onClick={toggleDisplay}
                className="bg-green-600 text-white py-2 px-4 rounded"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        {isVisible && (
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Address Details</h2>
            <div className="bg-white border shadow rounded-lg w-full md:w-3/4 p-4">
              <div className="bg-gray-100 p-3 mb-3" style={{ height: '100px' }}>
                <p><b>City:</b> {user.address.city}</p>
              </div>
              <dl>
                <dt className="font-medium">Street</dt>
                <dd className="mb-2">{user.address.street}</dd>
                <dt className="font-medium">Street Number</dt>
                <dd className="mb-2">{user.address.number}</dd>
                <dt className="font-medium">Zip Code</dt>
                <dd className="mb-2">{user.address.zipcode}</dd>
                <dt className="font-medium">Geo Location Latitude</dt>
                <dd className="mb-2">{user.address.geolocation.lat}</dd>
                <dt className="font-medium">Geo Location Longitude</dt>
                <dd className="mb-2">{user.address.geolocation.long}</dd>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
