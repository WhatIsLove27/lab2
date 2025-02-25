import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white mx-auto"> {/* Example Tailwind styling */}
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;