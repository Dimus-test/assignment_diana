import React from 'react';
import TdButton from "./UI/buttons/TdButton";
import TdCell from "./UI/cells/TdCell";

function ToDo({todoRecord, changeState, todoDelete}) {
    return (
          <tr>
                <TdCell className={'col1 col'}>
                    {todoRecord.id}
                </TdCell>
                <TdCell className={'col2 col'}>
                    {todoRecord.title}
                </TdCell>
                <TdCell className={'col3 col'}>
                    {todoRecord.state ? "готово" : "Не готово"}
                </TdCell>
                <TdCell className={'col4 col'}>
                    <input type={"checkbox"}
                           checked = {todoRecord.state}
                           onChange={(e)=>changeState(e, todoRecord.id)}
                    />
                </TdCell>
                <TdCell className={'col5 col'}>
                     <TdButton onClick={(e) => todoDelete(e, todoRecord.id)}>
                         Удалить
                     </TdButton>
                </TdCell>
          </tr>
    );
}

export default ToDo;