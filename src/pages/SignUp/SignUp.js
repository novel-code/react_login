import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <form>
      <h4>Sign Up</h4>
      <p>
        Existing user?<Link to={"/login"}>login</Link>
      </p>
    </form>
  );
};

export default SignUp;
