import React from 'react';

const Footer = () => {
  return (
    <footer id="contact"
            className="bg-gray-dark text-xs text-gray-lightest
                        py-4 flex border-gray-lightest border-t-1
                        mt-5 w-full max-w-6xl mx-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fortune Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
