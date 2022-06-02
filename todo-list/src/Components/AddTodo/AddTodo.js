import {useState} from "react";

function AddTodo({onAdd}) {
  const [value, setValue] = useState('');

  const handlerOnChange = (e) => {
    setValue(e.currentTarget.value)
  }
  const handleOnClick = () => {
      if(value){
          onAdd(value);
      }
  }
  return (
    <div className="add-todo">
      <input type="text" value={value} onChange={handlerOnChange}/>
      <button disabled={!value} onClick={handleOnClick}>Add</button>
    </div>
  );
}

export default AddTodo;
