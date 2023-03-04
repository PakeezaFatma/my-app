import React ,{Fragment} from "react";
import Card from "./Card";

import Button from "./Button";
import  ReactDOM from 'react-dom';
import classes from "../UI/ErrorModal.css"

const Backdrop = props=>{
  return <div className={classes.backdrop} onClick={props.onConfirm}/>
}
const Overlay =props =>{
  return <Card className="modal">
  <header className="header">
    <h2>{props.title}</h2>
  </header>
  <div className="content">
    <p>{props.message}</p>
  </div>
  <footer className="actions">
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
}
const ErrorModel = (props) => {
  return (
    <Fragment>
      {/* <div className="backdrop" onClick={props.onConfirm} /> */}
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
      document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Overlay 
      title={props.title} 
      message={props.message} 
      onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </Fragment>
  );
};
export default ErrorModel;
