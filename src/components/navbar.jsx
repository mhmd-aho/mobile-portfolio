import { NavLink } from "react-router"

export default function Navbar() {
  const base ="shrink-0 text-xs sm:text-sm border rounded-full transition-all duration-300 ease-in-out px-3 py-1.5 sm:px-4 sm:py-2 text-black/60 dark:text-white/60 whitespace-nowrap"

  const getActiveLink = ({ isActive }) =>
    `${base} ${
      isActive
        ? "bg-blue-500 border-blue-600 text-white dark:bg-cyan-500 dark:border-cyan-600"
        : "bg-black/10 border-black/20 dark:bg-white/10 dark:border-white/20"
    }`

  return (
    <nav className="w-full overflow-x-auto px-2 ml-5">
      <ul className="flex gap-2 sm:gap-3 justify-start sm:justify-center items-center min-w-max py-2">
        <NavLink className={getActiveLink} to="">About</NavLink>
        <NavLink className={getActiveLink} to="projects">Projects</NavLink>
        <NavLink className={getActiveLink} to="certifications">Certifications</NavLink>
        <NavLink className={getActiveLink} to="contact">Contact</NavLink>
      </ul>
    </nav>
  )
}
