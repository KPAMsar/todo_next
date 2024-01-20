"use client";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email == undefined || email == null || !email) {
      toast.error("Email is required");
      return false;
    }
    if (password == undefined || !password || password === null) {
      toast.error("Password is required");
      return false;
    }

    const infoBox = toast.loading("Please wait your request is processing...");
    try {
      const adminUser = await LoginAdmin({ email, password });

      toast.update(infoBox, {
        render: "Success!",
        type: "success",
        isLoading: false,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });

      console.log("thee", adminUser);
      // updateUser(user);

      // navigate("/dashboard", { replace: true });
      window.localStorage.setItem(
        "crypt8-admin-authtoken",
        adminUser.data.token
      );

      window.location.replace("/");
    } catch (error) {
      const displayMsg = error?.data?.message;

      toast.error(infoBox, {
        type: "error",
        isLoading: false,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px]   lg:pr-[40px] fixed">
        <div className=" flex  h-screen  items-center justify-center">
          <div className="items-center w-[500px] justify-center">
            <div className="justify-center pb-[30px]">
              <p className="text-[#00356B] text-[30px] font-[700] lg:text-[40px] ">
                Welcome back
              </p>
            </div>
            <form id="login-form" onSubmit={handleLogin}>
              <div className="text-[#00356B] text-[18px]">
                <p>Email Address</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" border border-solid border-[#00356B] border-w-1 text-[white]  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="kpamsarshija@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="text-[#00356B] text-[18px]">
                <p>Password</p>
                <input
                  type="text"
                  className=" border border-solid border-[#00356B] border-w-1  text-[white]  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-[#fff]  w-full p-2 px-[100px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#00356B]  text-center "
                >
                  Login
                </button>
              </div>
              <p class="pt-4">
                Dont have an account ?<Link href="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
