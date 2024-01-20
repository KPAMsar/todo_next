"use client";
import { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";

const Login = () => {
  const data = [
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
    {
      task: "Cleaning",
      status: "Done",
    },
  ];

  const initModal = () => {
    // Your logic for initializing the modal
  };

  const [alltask, setAllTask] = useState(true);
  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw] lg:w-[40dvw] overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px]   lg:pr-[40px] fixed ">
        <div class="bg-slate-400 flex flex-row justify-between  items-center   h-[60px] mt-4   ">
          <div
            className={`${
              alltask
                ? "bg-slate-100 w-[50%] p-5 ml-1 items-center justify-center flex h-[80%] rounded-sm"
                : "w-[50%] p-5 ml-1 items-center justify-center flex h-[80%]"
            }`}
            onClick={() => {
              setAllTask(true);
            }}
          >
            <p className="text-[600]  items-center justify-center flex ">
              All Tasks
            </p>
          </div>
          <p
            onClick={() => {
              setAllTask(false);
            }}
            className={`${
              !alltask
                ? "bg-slate-100 w-[50%] p-5 mr-1 items-center justify-center flex h-[80%] rounded-sm text-[#00356B]"
                : "w-[50%] p-5 ml-1 items-center justify-center flex h-[80%] text-[#00356B]"
            }`}
          >
            Completed Tasks
          </p>
        </div>

        <div>
          <table className="table w-[100dvw] overflow-hidden lg:w-full lg:pb-[60px]">
            <thead className="text-white">
              <tr>
                <th className="min-w-[10px]">s/n</th>
                <th className="min-w-[120px]">Task</th>
                <th className="min-w-[50px]">Status</th>
                <th className="min-w-[50px]">Actions</th>
              </tr>
            </thead>
            <tbody className=" ">
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    border: "none",
                    justifyItems: "center",
                  }}
                >
                  <td
                    onClick={initModal}
                    style={{ border: "none", textAlign: "center" }}
                    className="p-[1rem] text-[#787878]"
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem] text-[#787878] text-center"
                  >
                    {item.task}
                  </td>
                  <td
                    style={{ border: "none" }}
                    className="p-[1rem]  text-[#787878] flex justify-center"
                  >
                    <button className="btn  text-[green]">{item.status}</button>
                  </td>
                  <td
                    onClick={initModal}
                    style={{ border: "none", textAlign: "center" }}
                  >
                    <RxDotsVertical
                      style={{ display: "block", margin: "auto" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Login;