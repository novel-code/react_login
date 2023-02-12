import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBearStore from "../../state/State";
import styles from "./Login.module.css";

const Login = (props) => {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const submitHandler = async (e) => {
    e.preventDefault();

    // const dbUsername = "syed";
    // const dbPassword = "admin";

    console.log("login data", userLoginData);

    // if (
    //   userLoginData.username === dbUsername &&
    //   userLoginData.password === dbPassword
    // ) {
    //   setIsUserValid(true);
    //   navigate("/myprofile");
    // }
  };

  const onChange = (e) => {
    setUserLoginData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value.replaceAll(" ", "");

      if (helper.username && helper.password) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }

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
          <button disabled={isDisabled}>submit</button>
        </div>

        <p className={styles["p-link"]}>
          New user?{" "}
          <Link className={styles["link"]} to={"/signup"}>
            sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
