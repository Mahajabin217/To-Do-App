import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems,onDeleteClick}) => {
    return (

        <div className="items-container">
            {todoItems.map((item,idx) => (
                <TodoItem key={idx} todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick}></TodoItem>
            ))}
            {/* <TodoItem todoName="Buy Milk" todoDate="4/20/2025"></TodoItem>
            <TodoItem todoName="Go to versity" todoDate="4/20/2025"></TodoItem> */}
        </div>
    );
};
export default TodoItems;