import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-3xl">
          <span className="text-blue-500">LakshyaPath</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-lg font-[400] gap-x-8 Helvetica">
          <NavLink
            to="/"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Recommendations
          </NavLink>
          <NavLink
            to="/roadmap"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/community"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Community
          </NavLink>
          <NavLink
            to="/progress"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Progress
          </NavLink>
          <NavLink
            to="/profile"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/login"
            className={(e) =>
              e.isActive ? "text-blue-900" : "text-black hover:border-b-2"
            }
          >
            Login / Register
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-lg font-[400] Helvetica">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            Recommendations
          </NavLink>
          <NavLink to="/roadmap" onClick={() => setIsOpen(false)}>
            Roadmap
          </NavLink>
          <NavLink to="/community" onClick={() => setIsOpen(false)}>
            Community
          </NavLink>
          <NavLink to="/progress" onClick={() => setIsOpen(false)}>
            Progress
          </NavLink>
          <NavLink to="/profile" onClick={() => setIsOpen(false)}>
            Profile
          </NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)}>
            Login / Register
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
