import styles from "./Header.module.css";
// import logo from "../../../assets/techy-tailor-logo.png";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        {/* <img className={styles.headerLogo} src={logo} alt='company logo' /> */}
      </div>
      <div className={styles.headerItem}>
        <h1>your stats</h1>
      </div>
    </header>
  );
};

export default Header;
