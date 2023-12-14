import React from 'react';
import classes from "./TdButton.module.css"
const TdButton = ({children, ...props}) => {
    return (
        <button className={classes.tdButton} {...props}>
            {children}
        </button>
    );
};

export default TdButton;