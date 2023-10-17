// pages/index.js
import React from 'react';
import Link from 'next/link';

const IndexPage = () => (
  <div>
    <h1>Welcome to our SaaS app!</h1>
    <Link href="/pricing">
      <a>Check our pricing</a>
    </Link>
  </div>
);

export default IndexPage;