'use client';

import { useEffect, useState } from 'react';

const HelloWorld: React.FC = () => {
  const [message] = useState<string>("I am Hello World component");

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', color: 'blue' }}>
        Welcome To Next.js Development
      </h1>
      <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', color: 'blue' }}>
        Hello World! This is my first Inline Next.js Component
      </h1>
      <h3 style={{ color: 'red' }}>{message}</h3>
    </div>
  );
};

export default HelloWorld;
