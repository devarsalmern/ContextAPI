import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/createContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { logout, isloggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedIn) {
      navigate("/");
    }
  }, [isloggedIn]);

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <h1>Home page</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}

export default Home;
