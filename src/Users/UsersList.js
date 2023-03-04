import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const USersList =(props) =>{
   return(
    <Card className={classes.users}>
    <ul>
      
        {props.users.map((user)=>(
            <li>
                {user.name} ({user.age}Years old) {user.college}
            </li>
        ))}
         

    
    </ul>
    </Card>
   ) ;
};
export default USersList;