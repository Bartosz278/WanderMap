import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import useMobile from "../context/useMobile";
import mobileStyles from "./AppNavMobile.module.css";

function AppNav() {
  const isMobile = useMobile();
  const appliedStyles = isMobile ? mobileStyles : styles;
  return (
    <nav className={appliedStyles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
