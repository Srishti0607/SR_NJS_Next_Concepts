'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
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

export default function ShowAllUsersTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-2 border">SlNo</th>
              <th className="px-3 py-2 border">User ID</th>
              <th className="px-3 py-2 border">Username</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">First Name</th>
              <th className="px-3 py-2 border">Last Name</th>
              <th className="px-3 py-2 border">City</th>
              <th className="px-3 py-2 border">Street</th>
              <th className="px-3 py-2 border">Street No.</th>
              <th className="px-3 py-2 border">Zip Code</th>
              <th className="px-3 py-2 border">Latitude</th>
              <th className="px-3 py-2 border">Longitude</th>
              <th className="px-3 py-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border text-center">{i + 1}</td>
                <td className="px-3 py-2 border text-center">{user.id}</td>
                <td className="px-3 py-2 border">{user.username}</td>
                <td className="px-3 py-2 border">{user.email}</td>
                <td className="px-3 py-2 border">{user.name.firstname}</td>
                <td className="px-3 py-2 border">{user.name.lastname}</td>
                <td className="px-3 py-2 border">{user.address.city}</td>
                <td className="px-3 py-2 border">{user.address.street}</td>
                <td className="px-3 py-2 border text-center">{user.address.number}</td>
                <td className="px-3 py-2 border">{user.address.zipcode}</td>
                <td className="px-3 py-2 border">{user.address.geolocation.lat}</td>
                <td className="px-3 py-2 border">{user.address.geolocation.long}</td>
                <td className="px-3 py-2 border">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
