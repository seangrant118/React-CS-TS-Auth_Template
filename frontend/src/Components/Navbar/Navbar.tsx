import React from "react";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-10 shadow-sm">
      <div className="flex items-center justify-between">
        <a href="#">Place one</a>
        <div className="flex items-center">
          <a href="#" className="pr-6">Place two</a>
          <a href="#">Place three</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
