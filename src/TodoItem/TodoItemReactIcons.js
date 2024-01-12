import { FaCheckCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import "./TodoItem.css"


function TodoItemReactIcons(props) {


    return (
        <li className="TodoItem">
            {/* Asi se colocan clases dinamicas */}
            {/* Ejemplo con React Icons */}
            <FaCheckCircle
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            />

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            
            {/* Ejemplo con React Icons */}
            <TiDelete
                className="Icon Icon-delete"
                onClick={props.onDelete}
            />
        </li>
    );
}

export { TodoItemReactIcons }