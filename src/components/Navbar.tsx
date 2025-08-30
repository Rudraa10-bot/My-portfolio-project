// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-blue-400">My Portfolio</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/projects" className="hover:text-blue-400">Projects</Link>
        <Link href="/blogs" className="hover:text-blue-400">Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
