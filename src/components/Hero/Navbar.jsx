import { useState, useEffect } from "react";
import {
FaBars,
FaTimes,
FaSun,
FaMoon,
} from "react-icons/fa";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const [darkMode, setDarkMode] = useState(() => {
return localStorage.getItem("theme") !== "light";
});

useEffect(() => {
if (darkMode) {
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");
} else {
document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
}
}, [darkMode]);

const links = [
{ name: "Home", href: "#home" },
{ name: "Projects", href: "#projects" },
{ name: "Skills", href: "#skills" },
{ name: "Contact", href: "#contact" },
];

return (
<nav
className={`sticky top-0 z-[50] backdrop-blur-sm ${
        darkMode
          ? "bg-black/30"
          : "bg-gray-200/80"
      }`}
> <div className="max-w-7xl mx-auto px-8">
{/* Desktop Menu */}
<ul
className={`hidden md:flex justify-end items-center gap-20 py-8 font-medium tracking-wide ${
            darkMode
              ? "text-[#BCBCDD]"
              : "text-[#454544]"
          }`}
>
{links.map((link) => ( <li key={link.name}>
<a
href={link.href}
className={`transition-colors duration-300 ${
                  darkMode
                    ? "hover:text-[#91A1D9]"
                    : "hover:text-[#2978B4]"
                }`}
>
{link.name} </a> </li>
))}


      <li>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-xl transition ${
            darkMode
              ? "hover:text-[#91A1D9]"
              : "hover:text-[#2978B4]"
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </li>
    </ul>

    {/* Mobile Controls */}
    <div className="md:hidden flex justify-end items-center gap-5 py-6 relative z-[60]">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`text-xl ${
          darkMode
            ? "text-white"
            : "text-black"
        }`}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`text-2xl ${
          darkMode
            ? "text-white"
            : "text-black"
        }`}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
      className={`md:hidden fixed top-0 left-0 w-full h-screen pt-24 z-40 ${
        darkMode
          ? "bg-[#96A8EC]"
          : "bg-gray-100"
      }`}
    >
      <ul
        className={`flex flex-col items-center gap-8 text-xl font-medium ${
          darkMode
            ? "text-white"
            : "text-black"
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>


);
}
