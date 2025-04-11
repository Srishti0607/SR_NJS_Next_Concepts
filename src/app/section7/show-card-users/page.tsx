'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
};

export default function ShowUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const image = 'https://i.pravatar.cc';

  useEffect(() => {
    fetch('http://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Users List</h2>
      <div className="flex flex-wrap gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-52 bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={image} alt="User Avatar" height={200} className="w-full h-52 object-cover" />
            <div className="bg-gray-100 px-4 py-2">
              <h2 className="text-lg font-semibold text-center">ID: {user.id}</h2>
            </div>
            <div className="p-4 text-sm">
              <dl>
                <dt className="font-medium text-gray-600">First Name</dt>
                <dd className="mb-2">{user.name.firstname}</dd>
                <dt className="font-medium text-gray-600">Last Name</dt>
                <dd className="mb-2">{user.name.lastname}</dd>
                <dt className="font-medium text-gray-600">Email</dt>
                <dd>{user.email}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
