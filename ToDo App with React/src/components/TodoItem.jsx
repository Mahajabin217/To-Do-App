function TodoItem({ todoName, todoDate, onDeleteClick}) {
    // let todoName='Buy Milk';
    // let todoDate='4/20/2025';
    return (
        <div class="container">
            <div class="row todo-row">
                <div class="col-6">
                    {/* Buy Milk */}
                    {todoName}
                </div>
                <div class="col-4">
                    {/* 4/20/2025 */}
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger todo-btn" onClick={()=>onDeleteClick(todoName)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;