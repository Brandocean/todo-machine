import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()

function TodoProvider({ children }) {

    const {
        item: todos, // Renombramos el return de item a todos
        updateItem: updateTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    //console.log(searchValue)

    //* La doble negacion (!!) es solo para indicar que se trata de booleanos pero funcion sin ellos
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    const searchedTodos = todos.filter(todo => {

        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)

    })

    const completedTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        const isCompleted = newTodos[todoIndex].completed
        newTodos[todoIndex].completed = !isCompleted
        updateTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        updateTodos(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        updateTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            openModal,
            setOpenModal,
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completedTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }