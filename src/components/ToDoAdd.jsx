import React, {useState} from 'react';
import ToDoInput from "./UI/inputs/ToDoInput";
import TdButton from "./UI/buttons/TdButton";

const ToDoAdd = ({addToDo, clearAll}) => {
    const [title, setTitle] = useState('')
    const onClick = (e) => {
        e.preventDefault();
        if (title) {
            addToDo(title);
            setTitle('');
        }
    }
    return (
        <div className={'flexInLine100'}>
            <div className={'addToDo'}>
                <ToDoInput style={{width: "80%"}} value={title} setValue={setTitle}/>
                <TdButton onClick={onClick}>
                    Добавить
                </TdButton>
            </div>
            <TdButton style={{alignSelf:"center"}}
                      onClick={clearAll}
            >
                Удалить все
            </TdButton>
        </div>

);
};

export default ToDoAdd;