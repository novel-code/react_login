import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css";

const SignUp = (props) => {
  const [userSignupData, setUserSignupData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    const dbUsername = "syed";
    const dbPassword = "admin";

    if (userSignupData.cpassword !== userSignupData.password) {
      setErrMsg("password do not match.");
    } else {
      setErrMsg("");
    }
  };

  const onChange = (e) => {
    setUserSignupData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value.replaceAll(" ", "");

      if (
        helper.fullname &&
        helper.email &&
        helper.username &&
        helper.password &&
        helper.cpassword
      ) {
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
        <p className={styles["heading"]}>Sign up</p>
        <div className={styles["inputs-div"]}>
          <input
            onChange={onChange}
            value={userSignupData.fullname}
            name='fullname'
            placeholder='full name'
            id='fullname'
            type={"text"}
          />
          <input
            onChange={onChange}
            value={userSignupData.email}
            name='email'
            placeholder='email'
            id='email'
            type={"email"}
          />
          <input
            onChange={onChange}
            value={userSignupData.username}
            name='username'
            placeholder='username'
            id='username'
            type={"text"}
          />
          <input
            onChange={onChange}
            value={userSignupData.password}
            name='password'
            placeholder='password'
            id='password'
            type={"password"}
          />
          <input
            onChange={onChange}
            value={userSignupData.cpassword}
            name='cpassword'
            placeholder='confirm password'
            id='cpassword'
            type={"password"}
          />
          <button disabled={isDisabled}>submit</button>
          {errMsg}
        </div>

        <p className={styles["p-link"]}>
          Existing user?{" "}
          <Link className={styles["link"]} to={"/login"}>
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
