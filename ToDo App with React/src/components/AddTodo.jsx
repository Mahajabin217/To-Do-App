import { useState } from "react";

function AddTodo({ onNewItem }) {
    const [todoName, setTodoName] = useState();
    const [todoDate, setTodoDate] = useState();

    const handleNameChange = (event) => {
        // console.log(event.target.value);
        setTodoName(event.target.value);
    }

    const handleAddBUttonClicked = () => {
        onNewItem(todoName, todoDate);
        setTodoName('');
        setTodoDate('');
    }

    const handleDateChange = (event) => {
        // console.log(event.target.value);
        setTodoDate(event.target.value);
    }
    return (

        <div className="container">
            <div className="row todo-row">
                <div class="col-6">
                    <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
                </div>
                <div class="col-4">
                    <input type="date" onChange={handleDateChange} />
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success todo-btn" value={todoDate} onClick={handleAddBUttonClicked}>Add</button>
                </div>
            </div>
        </div>
    );

}
export default AddTodo;