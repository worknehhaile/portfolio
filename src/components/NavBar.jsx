import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyPortfolio</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        {["/", "/about", "/skills", "/projects", "/contacts"].map(
          (path, idx) => {
            const label = ["Home", "About", "Skills", "Projects", "ContactMe"][
              idx
            ];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
