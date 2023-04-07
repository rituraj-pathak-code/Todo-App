import { useEffect, useState } from "react";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import CompleteTodoItem from "./Components/CompleteTodoItem";

function App() {
  const [tasks, settask] = useState([]);
  const [completeTasks, setCompleteTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  const [isModelOpen, setModelOpen] = useState(false);

  const titleHandler = (e) => {
    setTaskTitle(e.target.value);
  };
  const descHandler = (e) => {
    setTaskDesc(e.target.value);
  };

  const addTaskHandler = () => {
    if (taskTitle.trim().length === 0 || taskDesc.trim().length === 0) {
      return;
    }
    let taskInfo = {
      title: taskTitle,
      desc: taskDesc,
    };
    let updatedTasks = [taskInfo, ...tasks];
    settask(updatedTasks);
    localStorage.setItem("todoList", JSON.stringify(updatedTasks));
    setTaskTitle("");
    setTaskDesc("");
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todoList"));
    let savedCompletedTodo = JSON.parse(
      localStorage.getItem("completeTodoList")
    );
    if (savedTodo) {
      settask(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompleteTask(savedCompletedTodo);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="main_header">Todo App</h1>
      <div className="todo_wrapper">
        <div className="upper_border"></div>
        <div className="todo_input">
          <div className="todo_input_item">
            <label>Title</label>
            <input
              type="text"
              value={taskTitle}
              placeholder="Enter your task"
              onChange={titleHandler}
            ></input>
          </div>
          <div className="todo_input_item">
            <label>Description</label>
            <input
              type="text"
              value={taskDesc}
              placeholder="Description"
              onChange={descHandler}
            ></input>
          </div>
          <div className="todo_input_item">
            <button
              type="button"
              className="primarybtn"
              onClick={addTaskHandler}
            >
              <i className="fa fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="btn_area">
          <button
            className={`secondarybtn ${isCompleteScreen ? "" : "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondarybtn ${isCompleteScreen ? "active" : ""}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo_list">
          {isCompleteScreen
            ? completeTasks.map((item, index) => {
                return (
                  <CompleteTodoItem
                    key={Math.random()}
                    indexComplete={index}
                    completeTitle={item.title}
                    completeDesc={item.desc}
                    completeTasks={completeTasks}
                    setCompleteTask={setCompleteTask}
                  />
                );
              })
            : tasks.map((item, index) => {
                return (
                  <TodoItem
                    key={Math.random()}
                    taskTitle={item.title}
                    taskDesc={item.desc}
                    indextodo={index}
                    tasks={tasks}
                    setTodo={settask}
                    setFinishedTask={setCompleteTask}
                    completeTasks={completeTasks}
                  />
                );
              })}
        </div>
        <div className="lower_border"></div>
      </div>
    </div>
  );
}

export default App;
