import { useContext } from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {

    const { 
        totalTodos: total, 
        completedTodos: completed, 
        loading 
    } = useContext(TodoContext)

    return (
        <>
            {loading && 
                <h1 className='TodoCounter'>Cargando...</h1>
            }

            {(!loading && total === completed) &&
                <h1 className='TodoCounter'><span>¡Felicidades!</span> Has completado todo</h1>
            }
            
            {(!loading && total !== completed) &&
                <h1 className='TodoCounter'>
                    Has completado <span>{completed}</span> de <span>{total}</span> TODOS
                </h1>
            }
        </>
    );
}

export { TodoCounter }