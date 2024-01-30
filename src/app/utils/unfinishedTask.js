"use client";
import { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_ALL_TODO } from "../graphql/queries.graphql";
import { client } from "../graphql/client";
import { FaPlus } from "react-icons/fa";

export const UnfinishedTask = () => {
  const [allTodo, setAllTodo] = useState([]);

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
  return (
    <>
      <tbody className=" text-[#00356B] max-h-[500px] overflow-auto">
        {allTodo
          ?.filter((item) => item.status !== "Done")
          .map((item, index) => (
            <tr
              key={index}
              style={{
                border: "none",
                justifyItems: "center",
                alignItems: "center",
              }}
              className=""
            >
              <td
                style={{ border: "none", textAlign: "center" }}
                className="p-[1rem] text-[#00356B]"
              >
                {index + 1}
              </td>
              <td
                style={{ border: "none" }}
                className="p-[1rem] text-[#00356B] text-center"
              >
                {item.task}
              </td>
              <td
                style={{ border: "none" }}
                className="p-[1rem]  text-[#00356B] flex justify-center"
              >
                <button className="btn  text-[#00356B]">{item.status}</button>
              </td>

              <td
                style={{ border: "none", textAlign: "center" }}
                className="p-[1rem] text-[#00356B]"
              >
                <div style={{ position: "relative" }}>
                  <div className="flex justify-evenly">
                    <button
                      type="button"
                      id={item.id}
                      className="btn mt-4 p-2 px-4 bg-[green] text-white rounded-md"
                      onClick={(e) => {
                        setSelectedItemId(item.id);
                        handleDone(e);
                        setSelectedTodo(item.task);
                      }}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      id={item.id}
                      className="btn mt-4 p-2 px-4 bg-[#00356B] text-white rounded-md"
                      onClick={() => {
                        setSelectedItemId(item.id);

                        setUpdateModal(true);
                      }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      id={item.id}
                      className="btn mt-4 p-2 px-4 bg-[#FF0000] text-white rounded-md"
                      onClick={() => {
                        setSelectedItemId(item.id);
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default UnfinishedTask;
