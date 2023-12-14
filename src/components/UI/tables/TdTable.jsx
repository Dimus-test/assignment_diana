import React from 'react';
import classes from './TdTable.module.css'

const TdTable = ({children, ...props}) => {
    return (
        <table {...props} className={classes.table} >
            <thead>
                <tr>
                    <th className={'col1 col'}>
                        ID
                    </th>
                    <th className={'col2 col'}>
                        Название
                    </th>
                    <th className={'col3 col'}>
                        Состояние
                    </th>
                    <th className={'col3 col'}>
                        Изменить
                    </th>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>);
};

export default TdTable;