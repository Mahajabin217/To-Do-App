import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
    return (

        <div className="items-container">
            {todoItems.map((item,idx) => (
                <TodoItem key={idx} todoName={item.name} todoDate={item.date}></TodoItem>
            ))}
            {/* <TodoItem todoName="Buy Milk" todoDate="4/20/2025"></TodoItem>
            <TodoItem todoName="Go to versity" todoDate="4/20/2025"></TodoItem> */}
        </div>
    );
};
export default TodoItems;