import React, { useEffect } from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTaskHandler = (indexTodo) => {
    let reducedTodo = [...props.tasks];
    const newReducedTodo = reducedTodo.filter((item, index) => {
      return index !== indexTodo;
    });

    props.setTodo(newReducedTodo);
    localStorage.setItem("todoList", JSON.stringify(newReducedTodo));
  };

  const completeTaskHandler = () => {
    const completeTaskInfo = {
      title: props.taskTitle,
      desc: props.taskDesc,
    };
    let finishedTask = [completeTaskInfo, ...props.completeTasks];
    props.setFinishedTask(finishedTask);
    localStorage.setItem("completeTodoList", JSON.stringify(finishedTask));
    deleteTaskHandler(props.indextodo);
  };

  return (
    <div className="todo_list_item">
      <div className="todo_list_item_info">
        <h1>{props.taskTitle}</h1>
        <p>{props.taskDesc}</p>
      </div>
      <div className="task_controls">
        <button onClick={() => deleteTaskHandler(props.indextodo)}>
          <i className="fa fa-regular fa-trash trash_btn"></i>
        </button>
        <button className="checkbtn" onClick={completeTaskHandler}>
          <i className="fa fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
