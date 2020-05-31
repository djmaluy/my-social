import React from 'react';
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {
  let friend = props.state.names.map(name => <Friend name={name.name}  />);
  return (
      <div className={classes.title}>
        {friend}
      </div>
  )
}

export default Friends;