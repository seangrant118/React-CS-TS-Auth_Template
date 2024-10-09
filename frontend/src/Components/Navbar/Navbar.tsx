import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-10 shadow-sm">
      <div className="flex items-center justify-between">
        <Link to="/pageone">Page One</Link>
        <div className="flex items-center">
            <Link className="pr-6" to="/pagetwo">Page Two</Link>
            <Link to="/pagethree">Page Three</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
