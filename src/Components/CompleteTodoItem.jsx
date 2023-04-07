import React from "react";

const CompleteTodoItem = (props) => {
  const deleteTaskHandler = (indexTodo) => {
    let reducedTodo = [...props.completeTasks];
    const newReducedTodo = reducedTodo.filter((item, index) => {
      return index !== indexTodo;
    });
    props.setCompleteTask(newReducedTodo);
    localStorage.setItem("completeTodoList", JSON.stringify(newReducedTodo));
  };

  return (
    <div className="todo_list_item">
      <div>
        <h1>{props.completeTitle}</h1>
        <p>{props.completeDesc}</p>
      </div>
      <div className="task_controls">
        <button onClick={() => deleteTaskHandler(props.indexComplete)}>
          <i className="fa fa-regular fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CompleteTodoItem;
