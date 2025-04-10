// src/app/section4/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NgFor from './ng-for/page';
import IfDirective from './if/page';
import LoadTemplate from './load/page';

const Section4Page = () => {
  const [component, setComponent] = useState<'ng-for' | 'if' | 'load'>('ng-for');

  useEffect(() => {
    setComponent('ng-for');
  }, []);

  const renderComponent = () => {
    switch (component) {
      case 'ng-for':
        return <NgFor />;
      case 'if':
        return <IfDirective name={''} loggedIn={false} />;
      case 'load':
        return <LoadTemplate />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Section 4</h1>
      <nav className="space-x-4 mb-6">
        <button onClick={() => setComponent('ng-for')} className="text-blue-500 hover:underline">Ng For</button>
        <button onClick={() => setComponent('if')} className="text-blue-500 hover:underline">If Directive</button>
        <button onClick={() => setComponent('load')} className="text-blue-500 hover:underline">Load Template</button>
      </nav>

      <div className="mt-4 border-t pt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Section4Page;
