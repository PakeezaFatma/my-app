import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../components/Helper/Wrapper";

import classes from "./AddUser.module.css";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInput = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const entereAge = ageInputRef.current.value;
    const enterCollege = collegeInput.current.value;
    if (
      enteredName.trim().length === 0 ||
      entereAge.trim().length === 0 ||
      enterCollege.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+entereAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, entereAge,enterCollege);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInput.current.value = " ";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="username">College Name</label>
          <input id="usercollege" type="text" ref={collegeInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUsers;
