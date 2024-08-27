import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import mobileStyles from "./SidebarMobile.module.css";
import useMobile from "../context/useMobile";

function Sidebar() {
  const isMobile = useMobile();
  const appliedStyles = isMobile ? mobileStyles : styles;
  return (
    <div className={appliedStyles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}></p>
      </footer>
    </div>
  );
}

export default Sidebar;
