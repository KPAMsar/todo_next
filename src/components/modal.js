import React from "react";
import { VscClose } from "react-icons/vsc";

const AddTaskModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex justify-between pb-4">
          <h2 className="text-[#00356B] text-[18px]  text-center   font-[700] lg:text-[30px]  ">
            Add Task
          </h2>
          <VscClose onClick={onClose} />
        </div>
        <div>
          <div className="text-[#00356B] text-[18px]">
            <p>New Task</p>
            <input
              type="text"
              id="task"
              name="task"
              className=" border border-solid border-[#00356B] border-w-1 text-[white]  lg:h-[60px]  justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
              placeholder="Go Shopping"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[#fff]  w-full p-2 px-[100px] py-4  border border-1 border-[#9CFA4A2B]   bg-[#00356B]  text-center "
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
