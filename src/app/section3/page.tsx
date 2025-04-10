'use client';

import { useEffect, useState } from 'react';
import CodeBehindComponent from './code-behind';

const InLineComponent: React.FC = () => {
  const [message] = useState<string>("This is my first Inline NextJS Component.");

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', color: 'blue' }}>
        Welcome To Next.js Development
      </h1>
      <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', color: 'blue' }}>
        This is my first Inline Next.js Component
      </h1>
      <h3 style={{ color: 'red' }}>{message}</h3>
      <CodeBehindComponent />
    </div>
  );
};

export default InLineComponent;
