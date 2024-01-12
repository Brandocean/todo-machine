import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

    const {
        openModal,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodo,
        deleteTodo,
    } = useContext(TodoContext)

    return (
        <>

            <TodoCounter completed={completedTodos} total={totalTodos} loading={loading} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {loading &&
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                }
                {error && <TodosError />}
                {(!loading && searchedTodos === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completedTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && 
                <Modal>
                    <TodoForm />
                </Modal>
            }
        </>
    )
}

export { AppUI }