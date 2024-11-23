import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../reduxStore/Slice";
import { nanoid } from "@reduxjs/toolkit";
import './compo.css'


const AddStudent = () => {
  const [addName, setaddName] = useState("");
  const [addAge, setaddAge] = useState(null);
  const [addCourse, setaddCourse] = useState("");
  const [addBatch, setaddBatch] = useState("");

  const Dispatch = useDispatch();

  const SubmitData = (e) => {
    e.preventDefault();

    Dispatch(
      Add({
        id: nanoid(),
        name: addName,
        age: addAge,
        course: addCourse,
        batch: addBatch,
      })
    );

    setaddName("");
    setaddAge(null);
    setaddCourse("");
    setaddBatch("");
  };

  return (
    <>
      <form className="AddForm" onSubmit={SubmitData}>
        <input
          required
          type="text"
          placeholder="Enter Name"
          value={addName}
          onChange={(e) => setaddName(e.target.value)}
        />
        <input
          required
          type="number"
          placeholder="Enter Age"
          value={addAge}
          onChange={(e) => setaddAge(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter Course"
          value={addCourse}
          onChange={(e) => setaddCourse(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter Month of start"
          value={addBatch}
          onChange={(e) => setaddBatch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddStudent;
