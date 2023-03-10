import { useEffect, useRef, useState } from "react";
import styles from "./Toast.module.css";

const Toast = ({ messageType, message, setToast }) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    // const timeout = setTimeout(() => {
    setOpacity("opacity-1");
    // }, 0);
    const timeout2 = setTimeout(() => {
      setOpacity("opacity-0");
    }, 4000);
    const timeout3 = setTimeout(() => {
      // setToast(false);
      setToast({
        showToast: false,
      });
    }, 4200);

    return () => {
      // clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const close = () => {
    setOpacity("opacity-0");

    setTimeout(() => {
      // setToast(false);
      setToast({
        showToast: false,
      });
    }, 200);
  };

  return (
    <div
      className={`${styles["toast"]} ${styles[opacity]} ${styles[messageType]}`}
    >
      <div>{message}</div>
      <button className={styles["close"]} onClick={close}>
        x
      </button>
    </div>
  );
};

export default Toast;
