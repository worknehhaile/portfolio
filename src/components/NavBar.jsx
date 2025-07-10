import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyPortfolio</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
