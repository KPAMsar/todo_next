import { parse } from "cookie";
import Login from "./login/page";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  return <Login />;
};

export default Home;
