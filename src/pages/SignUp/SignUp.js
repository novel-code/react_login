import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../../UI/Toast/Toast";
import styles from "../Login/Login.module.css";

const SignUp = (props) => {
  const [userSignupData, setUserSignupData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const dbUsername = "syed";
    const dbPassword = "admin";

    if (userSignupData.cpassword !== userSignupData.password) {
      setToast(true);
      setMessage("password do not match.");
      return;
    } else if (
      userSignupData.fullname.trim().length === 0 ||
      userSignupData.email.trim().length === 0 ||
      userSignupData.username.trim().length === 0 ||
      userSignupData.password.trim().length === 0 ||
      userSignupData.cpassword.trim().length === 0
    ) {
      setToast(true);
      setMessage("all fields are required.");
      return;
    } else if (userSignupData.fullname.length < 3) {
      setToast(true);
      setMessage("full name should at least be 3 charecters long.");
      return;
    } else if (userSignupData.username.length < 4) {
      setToast(true);
      setMessage("username should at least be 4 charecters long.");
      return;
    } else if (userSignupData.password.length < 8) {
      setToast(true);
      setMessage("password should at least be 8 charecters long.");
      return;
    }
    console.log(userSignupData);
  };

  const onChange = (e) => {
    setUserSignupData((prev) => {
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
          <button>submit</button>
        </div>

        <p className={styles["p-link"]}>
          Existing user?{" "}
          <Link className={styles["link"]} to={"/login"}>
            login
          </Link>
        </p>
      </form>
      {toast ? <Toast setToast={setToast} message={message} /> : ""}
    </div>
  );
};

export default SignUp;
