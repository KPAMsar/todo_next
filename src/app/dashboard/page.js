"use client";
import { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import Modal from "../../components/modal";
import { useQuery, useMutation, gql } from "@apollo/client";
import { ADD_TODO_MUTATION } from "../graphql/mutations.graphql";
import { client } from "../graphql/client";
import { useEffect } from "react";
import { GET_ALL_TODO } from "../graphql/queries.graphql";
import { toast } from "react-toastify";
import {
  UPDATE_MUTATION,
  DELETE_TODO_MUTATION,
} from "../graphql/mutations.graphql";
import DoneTask from "../utils/doneTask";
import UnfinishedTask from "../utils/unfinishedTask";

const Dashboard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState();
  const [allTodo, setAllTodo] = useState([]);
  const [loadingDone, setLoadingDone] = useState(false);
  const [btn, setBtn] = useState();
  const [updateModal, setUpdateModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState();
  const [selectedTodo, setSelectedTodo] = useState();

  // const { loading, error, data } = useQuery(GET_DATA);

  let data;

  const handleDelete = async (id) => {
    try {
      const result = await client.mutate({
        mutation: DELETE_TODO_MUTATION,
        variables: {
          id,
        },
      });

      toast.success("Todo deleted Successfully");
      return;
    } catch (error) {
      console.error("Error deleting todo:", error.message);
      toast.error(error.message);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!task) {
      toast.error("Task field is neede");
      return;
    }
    try {
      const result = await client.mutate({
        mutation: ADD_TODO_MUTATION,
        variables: {
          task: task,
          status: "Pending",
        },
      });
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
    toast.success("Todo item added succesfully");
    setModalVisible(false);
    setTask("");
  };

  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    try {
      console.log("updatedTask", updatedTask);
      const result = await client.mutate({
        mutation: UPDATE_MUTATION,

        variables: {
          id: selectedItemId,
          task: updatedTask,
          status: "Pending",
        },
      });

      toast.success("Succful");
      setUpdatedTask("");
      setSelectedItemId("");
      console.log("Todo updated successfully:", result.data.updateTodo);
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  const handleDone = async (e) => {
    e.preventDefault();
    try {
      console.log("updatedTask", selectedItemId);
      const result = await client.mutate({
        mutation: UPDATE_MUTATION,
        variables: {
          id: selectedItemId,
          task: selectedTodo,
          status: "Done",
        },
      });

      toast.success("Successful");
      setUpdatedTask("");
      setSelectedItemId("");
      console.log("Todo updated successfully:", result.data.updateTodo);
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_ALL_TODO,
        });
        setAllTodo(data?.allTodo || []);
        this.data = data?.allTodo || [];
        console.log("result", data.allTodo);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [client]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  const [alltask, setAllTask] = useState(true);

  return (
    <>
      <div className=" lg:mb-[6rem] w-[100dvw]  overflow-hidden md:pl-[30px] pr-[10px] pl-[10px] md:pr-[30px] lg:pl-[48px]   lg:pr-[40px] fixed ">
        <div class="bg-slate-300 flex flex-row  lg:mx-auto lg:w-[40dvw] justify-between  items-center   h-[60px] mt-4   ">
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
            <p className="text-[16px] font-[700]  items-center justify-center flex ">
              All Tasks
            </p>
          </div>
          <div
            onClick={() => {
              setAllTask(false);
            }}
            className={` ${
              !alltask
                ? "bg-slate-100 w-[50%] p-5 mr-1 items-center justify-center flex h-[80%] rounded-sm  text-[#00356B]"
                : "w-[50%] p-5 ml-1 items-center justify-center flex h-[80%] text-[#00356B]"
            }`}
          >
            <p className="text-[16px] font-[700]  items-center justify-center flex ">
              Completed Tasks
            </p>
          </div>
        </div>

        <div className="mt-4 lg:w-[70dvw] lg:mx-auto">
          <p className="text-[#00356B] text-[18px]  text-center   font-[600] lg:text-[30px]  ">
            {alltask ? "All Tasks" : " Completed Tasks"}
          </p>
          <table className="table w-[100dvw] overflow-auto lg:w-full lg:pb-[60px]">
            <thead className="text-[#00356B]">
              <tr>
                <th className="min-w-[10px]">s/n</th>
                <th className="min-w-[120px]">Task</th>
                <th className="min-w-[50px]">Status</th>
                <th className="min-w-[50px]">Actions</th>
              </tr>
            </thead>
            {alltask && <UnfinishedTask />}
            {!alltask && <DoneTask />}

            <div
              className="fixed bottom-0 right-0 p-[20px] m-[30px] flex items-center justify-center bg-[#00356B] text-white rounded-[60px]"
              onClick={openModal}
            >
              <FaPlus size={24} />
            </div>
          </table>
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-[700px] mx-auto rounded-lg">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Add Task</p>
              <button
                className="mt-4 p-2 px-4 bg-[#00356B] text-white rounded-md"
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </div>

            <div className="text-[#00356B] text-[18px]">
              <p>Task</p>
              <input
                type="text"
                id="task"
                name="task"
                className="border border-solid border-[#00356B] border-w-1 lg:h-[60px] justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                placeholder="Add Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
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

      {updateModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-[700px] mx-auto rounded-lg">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Update Task </p>
              <button
                className="mt-4 p-2 px-4 bg-[#00356B] text-white rounded-md"
                onClick={() => setUpdateModal(false)}
              >
                Close
              </button>
            </div>

            <div className="text-[#00356B] text-[18px]">
              <p>Task</p>
              <input
                type="text"
                id="task"
                name="task"
                className="border border-solid border-[#00356B] border-w-1 lg:h-[60px] justify-between flex flex-col justify-item p-2 lg:p-4 gap-3 w-[100%] h-[50px] mb-[30px]"
                placeholder="Add Task"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
              />
            </div>

            <button
              className="mt-4 p-2 px-4 bg-white   border border-solid border-[#00356B] p-2 text-[#00356B]  w-full rounded-md"
              onClick={(e) => {
                handleUpdateTodo(e);
              }}
            >
              Update Task
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
