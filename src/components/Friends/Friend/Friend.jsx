import React from 'react';
import classes from './Friend.module.css'


const Friend = (props) => {

  return (
      <div className={classes.names}>
        {props.name}
      </div>
  )
}

export default Friend;