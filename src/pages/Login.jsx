import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/createContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isloggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isloggedIn) {
      navigate("/home");
    }
  }, [isloggedIn, navigate]);

  const handleClick = () => {
    login();
  };

  return (
    <>
      <h1>Login page</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;
