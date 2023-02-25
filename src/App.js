import React,{useState} from "react";
import AddUsers from "./Users/AddUsers";
import "./App.css";
import UsersList from "./Users/UsersList";

function App() {
 const [userList,setList]= useState([]);
const addUserHandler =(uName,uAge) =>{
  setList((prevUsersList)=>{
    return [...prevUsersList,{name: uName , age: uAge}];
  });
};
  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
