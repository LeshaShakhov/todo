import TodoItem from "./TodoItem";

const TodoList = ({todolist, onRemove, toggleDone}) => {
  return (
    <div className="todo-list">
        {todolist.map(
            todoItem => <TodoItem onRemove={onRemove} toggleDone={toggleDone} key={todoItem.id} id={todoItem.id} text={todoItem.text} done={todoItem.done}/>
        )}
    </div>
  );
}

export default TodoList;
