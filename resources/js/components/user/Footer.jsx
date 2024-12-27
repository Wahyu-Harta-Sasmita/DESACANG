import React from 'react';

const Footer = () => {
  return (
    <div className="bg-green-500 text-white py-5 text-center">
      <p className="text-sm m-0">&copy; 2024 DESACANG. All Rights Reserved.</p>
      <div className="mt-2 text-sm">
        <a
          href="/privacy-policy"
          className="mx-2 hover:underline"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="mx-2 hover:underline"
        >
          Terms of Service
        </a>
        <a
          href="mailto:contact@desacang.com"
          className="mx-2 hover:underline"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Footer;
