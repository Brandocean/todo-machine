import { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

    const { setOpenModal } = useContext(TodoContext)

    return (
        <button
            className="CreateTodoButton"
            onClick={
                (event) => {
                    console.log('le diste click')
                    console.log(event)
                    console.log(event.target)
                    setOpenModal(state => !state)
                }
            }
        >
            +
        </button>
    );
}

export { CreateTodoButton }