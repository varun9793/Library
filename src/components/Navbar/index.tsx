import React from 'react';

interface NavbarProps {
  brandName: string;
  links: { label: string; href: string }[];  // Changed `name` to `label`
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">{brandName}</div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:bg-blue-700 px-3 py-2 rounded"
            >
              {link.label}  {/* Use `label` instead of `name` */}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* For mobile view */}
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={() => {
              // You can add functionality to toggle mobile menu
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
