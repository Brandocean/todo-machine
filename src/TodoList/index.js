import "./TodoList.css"

function TodoList(props) {
    return (
        <ul className="TodoList">
            {/* Aqui se encuentran los elementos que envuelve el TodoList */}
            {props.children}
        </ul>
    );
}

export { TodoList }