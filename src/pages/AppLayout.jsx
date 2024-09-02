import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import mobileStyles from "./AppLayoutMobile.module.css";
import useMobile from "../context/useMobile";
import User from "../components/User";

function AppLayout() {
  const isMobile = useMobile();
  const appliedStyles = isMobile ? mobileStyles : styles;

  return (
    <div className={appliedStyles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
