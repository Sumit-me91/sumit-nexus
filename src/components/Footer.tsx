'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={24} />,
      url: 'https://twitter.com',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-center">
            © {currentYear} @Sumit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 