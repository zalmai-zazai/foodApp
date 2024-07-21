import React, { Children } from 'react';

const Container = ({ children }) => {
  return <div className="parentContainer">{children}</div>;
};

export default Container;
