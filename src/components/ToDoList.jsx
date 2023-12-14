import React, {useEffect, useState} from 'react';
import ToDo from "./ToDo";
import TdTable from "./UI/tables/TdTable";
import ToDoAdd from "./ToDoAdd";
import DataService from "../services/dataService";
import TdHeaderH2 from "./UI/headers/TdHeaderH2";

const DATA = "todo"
function ToDoList() {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        const todoList = DataService.loadData(DATA, []);
        setToDoList(todoList);
    }, []);

    const changeState = (e, id) => {
        const todoList = toDoList.map(value => value.id !== id ? value : {...value, state: ! value.state});
        DataService.saveData(DATA, todoList);
        setToDoList(todoList);
    }

    const addToDo = (title) => {
        const toDo = {id: (toDoList.length + 1), title, state: false, isDelete: false};
        const todoList = [...toDoList, toDo];
        DataService.saveData(DATA, todoList);
        setToDoList(todoList);
    }

    const deleteToDo = (e, id) => {
        e.preventDefault();
        const todoList = toDoList.map(value => value.id !== id ? value : {...value, isDelete: true});
        DataService.saveData(DATA, todoList);
        setToDoList(todoList);
    }

    const clearAll = (e) => {
        e.preventDefault();
        DataService.removeData(DATA);
        setToDoList([]);
    }

    return (
        <div className={'todoList'}>
            <ToDoAdd addToDo={addToDo}
                     clearAll={clearAll}
            />
            {toDoList.length ?
                <>
                    <TdHeaderH2> Список дел </TdHeaderH2>
                    <TdTable>
                        {toDoList.filter(record => !record.isDelete).map((record) =>
                            <ToDo todoRecord={record}
                                  changeState={changeState}
                                  todoDelete={deleteToDo}
                                  key={record.id}
                            />
                        )}
                    </TdTable>
                </>
                :
                <TdHeaderH2> Список дeл пуст </TdHeaderH2>
            }
        </div>
    );
}

export default ToDoList;