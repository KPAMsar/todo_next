import React, { useState } from "react";

const Modal = ({ handleAddTodo, isOpen, onClose, children }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
    onClose();

    console.log("in ererer");
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-[700px] mx-auto rounded-lg">
            {children}

            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Add Task</p>
              <button
                onClick={onClose}
                className="mt-4 p-2 px-4 bg-[#00356B] text-white rounded-md"
              >
                Close
              </button>
            </div>

            <div className="text-[#00356B] text-[18px]">
              <p>Task</p>
              <input
                type="email"
                id="email"
                // value={email}
                name="email"
                className=" border border-solid border-[#00356B] border-w-1  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                placeholder="Add Task"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              className="mt-4 p-2 px-4 bg-white   border border-solid border-[#00356B] p-2 text-[#00356B]  w-full rounded-md"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
