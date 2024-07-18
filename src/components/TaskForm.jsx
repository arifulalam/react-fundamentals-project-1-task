/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import {addTask, updateTask } from "../features/TaskSlice";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";

const TaskForm = ({ task = null, setIsUpdate }) => {
  const nameRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [disable, setDisable] = useState(true);
  const [count, setCount] = useState(100);

  const id = task != null ? task.id : "";
  const [name, setName] = useState(task != null ? task.name : "");
  const [title, setTitle] = useState(task != null ? task.title : "");
  const [description, setDescription] = useState(
    task != null ? task.description : ""
  );

  const dispatch = useDispatch();

  const isDisabled = (e) => {
    console.log(e.target.checked);
    setDisable(() => !e.target.checked);
  };

  const handleCharacters = (e) => {
    setCount(() => 100 - e.target.value.length);
    setDescription(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmpty(name)) {
      toast.error("Name can't be emply.");
      nameRef.current?.focus();
    } else if (validator.isEmpty(title)) {
      toast.error("Title can't be emply.");
      titleRef.current?.focus();
    } else if (validator.isEmpty(description)) {
      toast.error("Description can't be emply.");
      descriptionRef.current?.focus();
    } else {
      const task = {
        id: (id != "") ? id : uuid(),
        name: name,
        title: title,
        description: description,
        createdAt: new Date().toUTCString(),
      };

      console.log(task);

      try {
        if(id == ""){
          dispatch(addTask(task));
        }else{
          dispatch(updateTask(task));
        }        
      } catch (error) {
        console.log(error);
      }

      setName("");
      setTitle("");
      setDescription("");
      toast.success("Task added successfully.");

      setIsUpdate(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form method="get" className="w-full">
        <h2 className="text-3xl">Task</h2>
        <input type="hidden" name="id" value={id} />
        <label>Name</label>
        <input
          ref={nameRef}
          type="text"
          className="p-2 border-2 border-slate-800 w-full"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <label>Title</label>
        <input
          ref={titleRef}
          type="text"
          className="p-2 border-2 border-slate-800 w-full"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <label>Description</label>
        <textarea
          ref={descriptionRef}
          rows={6}
          className="p-2 border-2 border-slate-800 w-full"
          name="description"
          placeholder="Enter description"
          value={description}
          maxLength={100}
          onChange={handleCharacters}
        />
        <div className="flex justify-between">
          <div className="justify-start text-left">
            <label>
              <input
                type="checkbox"
                value={0}
                name="confirm"
                onChange={isDisabled}
              />{" "}
              I want to add this task
            </label>
          </div>
          <div className="justify-end">
            <label>{count} characters left.</label>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={disable}
          className="px-5 py-3 bg-slate-950 text-white font-bold disabled:bg-slate-500 cursor-pointer disabled:text-gray-900 disabled:cursor-not-allowed"
        >
          {id == "" ? "SAVE" : "UPDATE"}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
