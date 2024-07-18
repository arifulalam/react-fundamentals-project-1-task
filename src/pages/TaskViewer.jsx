/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { removeTask, updateTask } from "../features/TaskSlice";
import UpdateTaskForm from "../components/updateTask";

const TaskViewer = () => {
  const perLoad = 3;
  const [next, setNext] = useState(perLoad);
  const [isUpdate, setIsUpdate] = useState(false);

  const { Tasks } = useSelector((state) => state.Tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleLoadMore = () => {
    setNext((next) => next + perLoad);
  };

  const handleUpdateModal = (task) => {
    setIsUpdate(true);
    setTask(() => task);
  };

  if (isUpdate) {
    return <UpdateTaskForm setIsUpdate={setIsUpdate} task={task} />;
  }

  return (
    <>
      <Helmet>
        <title>Task Viewer</title>
      </Helmet>
      <div className="w-full flex flex-col px-3">
        <div className="w-full">
          <h1 className="clear-both w-full text-3xl font-bold mb-3">
            Task Viewer
          </h1>
        </div>
        <p></p>
        <div className="w-full">
          {Tasks == undefined || Tasks.length <= 0 ? "No task found." : ""}
          {Tasks?.slice(0, next).map((task) => {
            const date = new Date(task.createdAt);
            let createdAt = moment(date, "YYYYMMDD").fromNow();
            return (
              <>
                <fieldset className="border-spacing-5 border-separate border-2 border-cyan-500 p-5 mt-10">
                  <legend className="border text-blue-900 text-3xl p-2">
                    {task.title}
                  </legend>
                  <p>{task.content}</p>
                  <div className="flex justify-between place-items-stretch clear-both">
                    <p className="badge badge-ghost p-2 mt-10">{createdAt}</p>
                    <div className="mt-10 p-2">
                      <div className="join">
                        <button
                          className="btn btn-sm join-item bg-orange-400 text-white"
                          onClick={() => handleUpdateModal(task)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm join-item bg-red-600 text-white"
                          onClick={() => handleDelete(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskViewer;
