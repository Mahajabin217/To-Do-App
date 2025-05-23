import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import './App.css';
import TodoItems from "./components/TodoItems";
// import TodoItem from "./components/TodoItem";
import { useState } from 'react';
import WelcomeMsg from "./components/WelcomeMsg";


function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: '4/10/2025',
  //   },
  //   {
  //     name: 'Go to versity',
  //     date: '4/10/2025',
  //   },
  //   {
  //     name: 'Go to market',
  //     date: '4/10/2025',
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  }

  const handleDeleleItems = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted: ${todoItemName}`);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleleItems}></TodoItems>

        {/* <div className="items-container">
          <TodoItem todoName="Buy Milk" todoDate="4/20/2025"></TodoItem>
          <TodoItem todoName="Go to versity" todoDate="4/20/2025"></TodoItem>
            <TodoItem1 />
            <TodoItem2 /> 
          </div> */}
        {/* <div className="container"> */}
        {/* <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">Add</button>
            </div>
          </div> */}

        {/* <div class="row">
            <div class="col-6">
              Milk
            </div>
            <div class="col-4">
              4/20/2025
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div> */}

        {/* <div class="row">
            <div class="col-6">
              Eggs
            </div>
            <div class="col-4">
              4/20/2025
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div> */}
        {/* </div> */}
      </center>
    </>
  );
}

export default App;
