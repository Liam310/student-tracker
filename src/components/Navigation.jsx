import React from 'react';
import { Link } from '@reach/router';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {'  |  '}
      <Link to="/students">Students</Link>
    </nav>
  );
};

export default Navigation;
