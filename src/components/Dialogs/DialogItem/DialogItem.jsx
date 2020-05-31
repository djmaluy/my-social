import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
      <div className="img">

        <div className={` ${classes.dialog} ${classes.active} `}>
          <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" width="30" height="30"/>
          <NavLink to={path}> {props.name} </NavLink>
        </div>
      </div>
  )
}

export default DialogItem;