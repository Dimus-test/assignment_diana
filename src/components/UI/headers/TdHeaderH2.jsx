import React from 'react';
import classes from "./TdHeaderH2.module.css";

const TdHeaderH2 = ({children, ...props}) => {
    return (
        <h2 className={classes.headerH2} {...props}>
            {children}
        </h2>
    );
};

export default TdHeaderH2;