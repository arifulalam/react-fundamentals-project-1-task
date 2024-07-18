/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import TaskForm from "./TaskForm";

const UpdateTaskForm = ({ setIsUpdate, task }) => {
  return (
    <>
      <div className="w-full h-auto flex place-content-center items-center bg-[rgba(255,255,255, 0.3)]">
        <div className="w-1/2 justify-center bg-slate-200 rounded-md shadow-sm border border-sky-100 p-2">
          <div>
            <div className="relative">
              <IoMdCloseCircle
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => setIsUpdate(false)}
              />
            </div>
            <TaskForm task={task}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTaskForm;
