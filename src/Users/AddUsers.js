import React , {userState }from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
const AddUser =(props )=>{
    const [enteredUserName, setEnteredUserName] = userState(' ');
    const [enteredAge, setAge] = userState(' ');

    const addUserHandler =(event)=>{
       event.preventDefault();
       console.log(enteredUserName, enteredAge) 
    };

    const usernameChangeHander =(event) =>{
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler =(event) =>{
        setAge(event.target.value);
    };
    return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" onChange={usernameChangeHander}/>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit?">Add User</Button>
    </form>
    </Card>
    )
};
export default AddUser;