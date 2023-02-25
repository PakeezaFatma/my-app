import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../components/Helper/Wrapper";

import classes from "./AddUser.module.css";

const AddUsers = (props) => {
  const [enteredUseName, setEnteredUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error,setError] =useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUseName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age (non-empty values).'
        });
        return;
    }
    if (+enteredAge < 1) {
        setError({
            title:'Invalid age',
            message:'Please enter a valid Age (>0).'
        });
      return;
    }
    props.onAddUser(enteredUseName, enteredAge);
    setEnteredUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChnageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler =()=>{
    setError(null);
  }
  return (
    <Wrapper>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUseName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userAgeChnageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper> 
  );
};
export default AddUsers;
