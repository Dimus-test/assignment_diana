import classes from './ToDoInput.module.css'
const ToDoInput = ({value, setValue, ...props}) => {
    return (
        <div className={classes.tdInput} {...props}>
            <input className={classes.tdInputField}
                   type="text"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder={"Новое дело"}
            />
        </div>
    );
};

export default ToDoInput;