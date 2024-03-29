import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AboutIcon from "../../icons/AboutIcon";
import FriendsIcon from "../../icons/FriendsIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import useBearStore from "../../state/State";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const location = useLocation();
  // const setIsUserValid = useBearStore((state) => state.setIsUserValid);
  const isActive = (currentPath, pagePath) => {
    if (currentPath === pagePath) return styles.active;
    else return "";
  };

  return (
    <div className={styles["parent"]}>
      <label className={styles["hamburger-menu"]}>
        <input type={"checkbox"} />
      </label>
      <div className={styles.sidebar}>
        <nav className={styles.nav}>
          <Link
            to='/profile'
            className={`${styles.navItem}
          ${isActive(location.pathname, "/profile")}`}
          >
            <div className={styles.menuDiv}>
              <div className={styles.svgIcon}>
                <ProfileIcon />
              </div>
              <div className={styles.menuText}>profile</div>
            </div>
          </Link>
          <Link
            to='/friends'
            className={`${styles.navItem} 
          ${isActive(location.pathname, "/friends")}`}
          >
            <div className={styles.menuDiv}>
              <div className={styles.svgIcon}>
                <FriendsIcon />
              </div>
              <div className={styles.menuText}>friends</div>
            </div>
          </Link>
          <Link
            to='/about'
            className={`${styles.navItem} 
          ${isActive(location.pathname, "/about")}`}
          >
            <div className={styles.menuDiv}>
              <div className={styles.svgIcon}>
                <AboutIcon />
              </div>
              <div className={styles.menuText}>about</div>
            </div>
          </Link>
          {/* <Link
          onClick={() => setIsUserValid(false)}
          to='/login'
          className={`${styles.navItem} 
          ${isActive(location.pathname, "/login")}`}
          >
          logout
        </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
