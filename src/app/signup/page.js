"use client";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { http } from "../utils/http";
import { useRouter } from "next/router";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignin = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (email == undefined || email == null || !email) {
      toast.error("Email is required");
      return false;
    }

    if (fullname == undefined || email == null || !email) {
      toast.error("Name is required");
      return false;
    }
    if (password == undefined || !password || password === null) {
      toast.error("Password is required");
      return false;
    }

    if (confirmPassword == undefined || !password || password === null) {
      toast.error("Password is required");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password mismatch");
      return false;
    }

    const response = await http("signup", "POST", {
      fullname,
      email,
      password,
    });

    let allCookies = document.cookie;
    console.log("allCookies", allCookies);

    Cookies.get("access_token");

    if (response?.status === "success") {
      toast.success(" Login successful");
      window.location.replace("/login");
      setLoading(false);
    } else {
      toast.error("Something went wrong");
      return;
    }

    setLoading(false);
  };

  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw] lg:w-[100%] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px]   lg:pr-[40px] fixed">
        <div className=" flex  h-screen  items-center justify-center">
          <div className="items-center w-[500px] justify-center">
            <div className="justify-center pb-[30px]">
              <p className="text-[#00356B] text-[30px] font-[700] lg:text-[40px] ">
                Sign Up
              </p>
            </div>
            <form id="login-form" onSubmit={handleSignin}>
              <div className="text-[#00356B] text-[18px]">
                <p>Name</p>
                <input
                  type="text"
                  id="name"
                  name="email"
                  className=" border border-solid border-[#00356B] border-w-1   lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="Firstname Middlename Lastname "
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="text-[#00356B] text-[18px]">
                <p>Email Address</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" border border-solid border-[#00356B] border-w-1   lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="kpamsarshija@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-[#00356B] text-[18px]">
                <p>Password</p>
                <input
                  type="password"
                  className=" border border-solid border-[#00356B] border-w-1    lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-[#00356B] text-[18px]">
                <p>Confirm Password</p>
                <input
                  type="password"
                  className=" border border-solid border-[#00356B] border-w-1    lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-[#fff]  w-full p-2 px-[100px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#00356B]  text-center "
                >
                  {loading ? "Loading" : "Signup"}
                </button>
              </div>
              <p class="pt-4">
                Already have an account <Link href="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
