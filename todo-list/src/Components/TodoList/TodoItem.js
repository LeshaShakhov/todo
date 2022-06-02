const todoItemStyles = {
    textDecoration: 'line-through',
}
function TodoItem({id, text, done, toggleDone, onRemove}) {
  return (
    <div className="todo-item">
      <span style={done ? todoItemStyles : {}}>{id}.{text}</span>
        <button onClick={() =>{toggleDone(id)}}>{done ? 'UnDone' : 'Done'}</button>
        <button onClick={()=>{onRemove(id)}}>Remove</button>
    </div>
  );
}

export default TodoItem;
