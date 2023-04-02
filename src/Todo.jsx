import React, { Fragment, useState } from "react";
import "./Todo.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const [completeItems, setCompleteItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, inputData]);
  };

  function deleteItem(index) {
    const updateItems = items.filter((ele, ind) => {
      return ind != index;
    });
    setItems(updateItems);
  }
  function onComplete(index) {
    setCompleteItems([...completeItems, items[index]]);

    const updatedItems = items.filter((ele, ind) => {
      return ind !== index;
    });

    setItems(updatedItems);
  }

  return (
    <div className="todo">
      <h1 className="todo__header">Todo App</h1>
      <form onSubmit={addItem} className="todo__form">
        <input
          className="input__field"
          type={"text"}
          placeholder="Enter a task"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="add__task" type={"submit"}>
          Add task
        </button>
      </form>
      <div className="todo__items">
        <h2>Scheduled Tasks</h2>
        {items.map((element, index) => {
          return (
            <div className="todo__item" key={index}>
              <button className="btns_symbol" onClick={() => onComplete(index)}>
                <i class="fa fa-light fa-check"></i>
              </button>
              <p>{element}</p>
              <div className="item_btns">
                <button
                  className="btns_symbol"
                  onClick={() => deleteItem(index)}
                >
                  <i class="fa fa-solid fa-trash"></i>
                </button>
                <button>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="complete__items">
        <h2>Complete Tasks</h2>
        {completeItems.map((element, index) => {
          return (
            <div className="complete_todo__item todo__item" key={index}>
              <button
                className="btns_symbol"
                // onclick here
              >
                <i class="fa fa-solid fa-question"></i>
              </button>
              <p>{element}</p>
              <div className="item_btns">
                <button
                  className="btns_symbol"
                  // onclick here
                >
                  <i class="fa fa-solid fa-trash"></i>
                </button>
                {/* on click here */}
                <button>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
