import React from 'react';
import classes from './TdCell.module.css';
const TdCell = ({children, ...props}) => {
    return (
        <td {...props}>
            {children}
        </td>
    );
};

export default TdCell;