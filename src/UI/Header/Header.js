import { Link } from "react-router-dom";
import useBearStore from "../../state/State";
import styles from "./Header.module.css";
import StatsIcon from "../../icons/StatsIcon.js";
// import logo from "../../../assets/techy-tailor-logo.png";
const Header = (props) => {
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        {/* <img className={styles.headerLogo} src={logo} alt='company logo' /> */}
        <div className={styles.headerLogo}>
          <StatsIcon />
        </div>
      </div>
      <div className={styles.headerItem2}>
        <h1 className={styles.heading}>Stats</h1>
        <Link
          className={`${styles.logoutLink} ${styles["button-57"]}`}
          onClick={() => setIsUserValid(false)}
          to='/login'
        >
          <span className={styles["text"]}>logout</span>
          <span>sure?</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
