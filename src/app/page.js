import { parse } from "cookie";
import { useRouter } from "next/router";
import Login from "./login/page";

const Home = ({ isAuthenticated }) => {
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  return <Login />;
};

export const getServerSideProps = async (context) => {
  const cookies = parse(context.req.headers.cookie || "");

  const isAuthenticated = !!cookies["access_token"];

  return {
    props: {
      isAuthenticated,
    },
  };
};

export default Home;
