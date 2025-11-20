import { NavLink } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import { useState } from "react"

const NAvbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative w-full">
      {/* Mobile View */}
      <div className="md:hidden flex justify-start items-start p-5 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <button onClick={() => setOpen(!open)}>
          <HiMenu size={35} className="text-cyan-400 drop-shadow-[0_0_6px_#0ff]" />
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#9be8ff] shadow-xl rounded-b-lg z-20 border-t border-cyan-400/40">
            <ul className="flex flex-col items-center gap-3 py-4">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="hover:bg-cyan-400 hover:text-black p-2 w-3/4 text-center rounded-sm transition-all duration-300 ease-in"
              >
                Home
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:bg-cyan-400 hover:text-black p-2 w-3/4 text-center rounded-sm transition-all duration-300 ease-in"
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:bg-cyan-400 hover:text-black p-2 w-3/4 text-center rounded-sm transition-all duration-300 ease-in"
              >
                About
              </NavLink>
              <NavLink
                to="/pricing"
                onClick={() => setOpen(false)}
                className="hover:bg-cyan-400 hover:text-black p-2 w-3/4 text-center rounded-sm transition-all duration-300 ease-in"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/testimonials"
                onClick={() => setOpen(false)}
                className="hover:bg-cyan-400 hover:text-black p-2 w-3/4 text-center rounded-sm transition-all duration-300 ease-in"
              >
                Testimonials
              </NavLink>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full">
        <ul className="flex justify-center items-center gap-10 p-3 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#9be8ff] font-bold shadow-md border-b border-cyan-400/30">
          {["/", "/contact", "/about", "/pricing", "/testimonials"].map((path, i) => {
            const labels = ["Home", "Contact", "About", "Pricing", "Testimonials"]
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-cyan-400 text-black shadow-[0_0_8px_#0ff]"
                      : "text-[#9be8ff]"
                  } hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-sm transition-all duration-300 ease-in`
                }
              >
                {labels[i]}
              </NavLink>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NAvbar
