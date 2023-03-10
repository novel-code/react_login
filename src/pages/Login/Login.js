import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBearStore from "../../state/State";
import styles from "./Login.module.css";
import Toast from "../../UI/Toast/Toast";

const Login = (props) => {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });
  // const [toast, setToast] = useState(false);
  // const [message, setMessage] = useState("");

  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    messageType: "",
  });

  const navigate = useNavigate();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (userLoginData.username.trim().length < 4) {
      // setToast(true);
      // setMessage("username or email should atleast be 4 charecters long.");
      setToast({
        showToast: true,
        message: "username or email should atleast be 4 charecters long.",
        messageType: "danger",
      });
      return;
    } else if (userLoginData.password.trim().length < 8) {
      // setToast(true);
      // setMessage("password should at least be 8 charecters long.");
      setToast({
        showToast: true,
        message: "password should at least be 8 charecters long.",
        messageType: "danger",
      });
      return;
    }

    const dbUsername = "syed";
    const dbPassword = "admin123";

    console.log("login data", userLoginData);

    if (
      userLoginData.username === dbUsername &&
      userLoginData.password === dbPassword
    ) {
      setIsUserValid(true);
      navigate("/myprofile");
    }
  };

  const onChange = (e) => {
    setUserLoginData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value.replaceAll(" ", "");

      return helper;
    });
  };

  return (
    <div className={styles["main"]}>
      <form onSubmit={submitHandler} className={styles["form"]}>
        <div className={styles["user-image"]}>
          <div className={styles["head"]} />
          <div className={styles["body"]} />
        </div>
        <p className={styles["heading"]}>Login</p>
        <div className={styles["inputs-div"]}>
          <input
            onChange={onChange}
            value={userLoginData.username}
            name='username'
            placeholder='username or email'
            id='username'
            type={"text"}
          />
          <input
            onChange={onChange}
            value={userLoginData.password}
            name='password'
            placeholder='password'
            id='password'
            type={"password"}
          />
          <button>submit</button>
        </div>

        <p className={styles["p-link"]}>
          New user?{" "}
          <Link className={styles["link"]} to={"/signup"}>
            sign up
          </Link>
        </p>
      </form>
      {toast.showToast ? (
        <Toast
          setToast={setToast}
          message={toast.message}
          messageType={toast.messageType}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
