import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBearStore from "../../state/State";

const Login = (props) => {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const submitHandler = async (e) => {
    e.preventDefault();

    const dbUsername = "syed";
    const dbPassword = "admin";

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
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>Login</h4>
      <input
        onChange={onChange}
        value={userLoginData.username}
        name='username'
        placeholder='username'
        id='username'
        type={"text"}
      />
      <input
        onChange={onChange}
        value={userLoginData.password}
        name='password'
        placeholder='password'
        id='password'
        type={"text"}
      />
      <button>submit</button>

      <p>
        Are you a new user?<Link to={"/signup"}>sign up</Link>
      </p>
    </form>
  );
};

export default Login;
