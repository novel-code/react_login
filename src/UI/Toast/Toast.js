import { useEffect, useRef, useState } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, setToast }) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity("opacity-1");
    }, 0);
    const timeout2 = setTimeout(() => {
      setOpacity("opacity-0");
    }, 4000);
    const timeout3 = setTimeout(() => {
      setToast(false);
    }, 5300);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const close = () => {
    setOpacity("opacity-0");

    setTimeout(() => {
      setToast(false);
    }, 300);
  };

  return (
    <div className={`${styles["toast"]} ${styles[opacity]}`}>
      <div>{message}</div>
      <button className={styles["close"]} onClick={close}>
        x
      </button>
    </div>
  );
};

export default Toast;
