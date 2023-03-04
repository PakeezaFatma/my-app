import React,{useState, Fragment} from "react";
import AddUsers from "./Users/AddUsers";
import "./App.css";
import UsersList from "./Users/UsersList";

function App() {
 const [userList,setList]= useState([]);
const addUserHandler =(uName,uAge,uCollege) =>{
  setList((prevUsersList)=>{
    return [...prevUsersList,{name: uName , age: uAge, college: uCollege}];
  });
};
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </Fragment>
  );
}

export default App;
