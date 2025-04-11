'use client';
import { useState, useEffect } from 'react';
import ShowUsers from './show-card-users/page';
import ShowAllUsersTable from './show-users/page';
import ViewChild from './view-child/page';
import GetUserDetails from './get-user-details/page';

const Section4Page = () => {
  const [component, setComponent] = useState<'show-card-users' | 'show-users' | 'view-child' | 'get-user-details'>('show-card-users');

  useEffect(() => {
    setComponent('show-card-users');
  }, []);

  const renderComponent = () => {
    switch (component) {
      case 'show-card-users':
        return <ShowUsers />;
      case 'show-users':
        return <ShowAllUsersTable/>;
      case 'view-child':
        return <ViewChild />;
    case 'get-user-details':
        return <GetUserDetails/>
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Section 4</h1>
      <nav className="space-x-4 mb-6">
        <button onClick={() => setComponent('show-card-users')} className="text-blue-500 hover:underline">Show Users using Card</button>
        <button onClick={() => setComponent('show-users')} className="text-blue-500 hover:underline">Show Users</button>
        <button onClick={() => setComponent('view-child')} className="text-blue-500 hover:underline">View Child</button>
        <button onClick={() => setComponent('get-user-details')} className="text-blue-500 hover:underline">Get User Details</button>
      </nav>

      <div className="mt-4 border-t pt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Section4Page;
