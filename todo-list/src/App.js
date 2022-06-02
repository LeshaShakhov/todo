import './App.css';
import AddTodo from "./Components/AddTodo/AddTodo";
import Todolist from "./Components/TodoList/Todolist";
import {useSelector, useDispatch} from "react-redux";
import {toggleDone, add, remove} from "./store/todoListSlice";

const App = () => {
    const todoItems= useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    const onToggleDone = (id) => {
        dispatch(toggleDone(id));
    }
    const onRemove = (id) => {
       dispatch(remove(id))
    }

    const onAdd = (text) => {
      dispatch(add(text));
    }
    return (
        <div className="App">
            <AddTodo onAdd={onAdd}/>
            <Todolist todolist={todoItems} toggleDone={onToggleDone} onRemove={onRemove}/>
        </div>
    );

}

export default App;
