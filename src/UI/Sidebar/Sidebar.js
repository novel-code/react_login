import { Link, useLocation } from "react-router-dom";
import useBearStore from "../../state/State";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const location = useLocation();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);
  const isActive = (currentPath, pagePath) => {
    if (currentPath === pagePath) return styles.active;
    else return "";
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.btnDiv}>X</div>
      <nav className={styles.nav}>
        <Link
          to='/myprofile'
          className={`${styles.navItem}
          ${isActive(location.pathname, "/myprofile")}`}
        >
          my profile
        </Link>
        <Link
          to='/about'
          className={`${styles.navItem} 
          ${isActive(location.pathname, "/about")}`}
        >
          about
        </Link>
        <Link
          onClick={() => setIsUserValid(false)}
          to='/login'
          className={`${styles.navItem} 
          ${isActive(location.pathname, "/login")}`}
        >
          login out
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
