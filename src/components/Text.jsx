import React from 'react';

const Text = ({ children, className = "", as: Tag = 'p', ...props }) => {
  return (
    <Tag className={`text-white ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Text;