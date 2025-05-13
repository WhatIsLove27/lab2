import React from 'react';

const Text = ({ children, className = "", as: Tag = 'p', ...props }) => {
  return (
    <Tag className={`${className}`}>
      {children}
    </Tag>
  );
};

export default Text;