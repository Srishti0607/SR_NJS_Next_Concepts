'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  username: string;
  password: string;
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

export default function ViewChild() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<'accountdetails' | 'namedetails' | 'addressdetails' | 'geolocationdetails'>('accountdetails');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  const handleViewChange = (viewName: typeof view) => {
    setView(viewName);
  };

  const goToPreviousUser = () => {
    setUserId((prev) => Math.max(prev - 1, 1));
  };

  const goToNextUser = () => {
    setUserId((prev) => prev + 1);
  };

  if (!user) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-4">User Details</h3>
      <div className="flex">
        <div className="w-1/4 pr-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleViewChange('accountdetails')}
              className="btn bg-red-600 text-white py-2 px-4 rounded"
            >
              Account Details
            </button>
            <button
              onClick={() => handleViewChange('namedetails')}
              className="btn bg-red-600 text-white py-2 px-4 rounded"
            >
              Name Details
            </button>
            <button
              onClick={() => handleViewChange('addressdetails')}
              className="btn bg-red-600 text-white py-2 px-4 rounded"
            >
              Address Details
            </button>
            <button
              onClick={() => handleViewChange('geolocationdetails')}
              className="btn bg-red-600 text-white py-2 px-4 rounded"
            >
              Geo Location Details
            </button>
          </div>
        </div>

        <div className="w-3/4 bg-gray-100 p-4 rounded shadow">
          {view === 'accountdetails' && (
            <div>
              <h4 className="text-xl font-bold mb-2">Account Details</h4>
              <dl>
                <dt>ID:</dt>
                <dd>{user.id}</dd>
                <dt>Username:</dt>
                <dd>{user.username}</dd>
                <dt>Password:</dt>
                <dd>{user.password}</dd>
                <dt>Email:</dt>
                <dd>{user.email}</dd>
                <dt>Phone:</dt>
                <dd>{user.phone}</dd>
              </dl>
            </div>
          )}

          {view === 'namedetails' && (
            <div>
              <h4 className="text-xl font-bold mb-2">Name Details</h4>
              <img src={`https://i.pravatar.cc/200?img=${user.id}`} alt="User" className="w-48 h-60 mb-4" />
              <dl>
                <dt>First Name:</dt>
                <dd>{user.name.firstname}</dd>
                <dt>Last Name:</dt>
                <dd>{user.name.lastname}</dd>
              </dl>
            </div>
          )}

          {view === 'addressdetails' && (
            <div>
              <h4 className="text-xl font-bold mb-2">Address Details</h4>
              <dl>
                <dt>City:</dt>
                <dd>{user.address.city}</dd>
                <dt>Street:</dt>
                <dd>{user.address.street}</dd>
                <dt>Number:</dt>
                <dd>{user.address.number}</dd>
                <dt>Zip Code:</dt>
                <dd>{user.address.zipcode}</dd>
              </dl>
            </div>
          )}

          {view === 'geolocationdetails' && (
            <div>
              <h4 className="text-xl font-bold mb-2">Geo Location Details</h4>
              <dl>
                <dt>Latitude:</dt>
                <dd>{user.address.geolocation.lat}</dd>
                <dt>Longitude:</dt>
                <dd>{user.address.geolocation.long}</dd>
              </dl>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={goToPreviousUser}
          className="flex items-center gap-1 bg-red-600 text-white py-2 px-4 rounded disabled:opacity-50"
          disabled={userId === 1}
        >
          <span className="text-lg">←</span> Previous User
        </button>
        <button
          onClick={goToNextUser}
          className="flex items-center gap-1 bg-red-600 text-white py-2 px-4 rounded"
        >
          Next User <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}
