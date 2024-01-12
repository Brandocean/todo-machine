import { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)

                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }

                setLoading(false)
            } catch (e) {
                setLoading(false)
                setError(true)
            }
        }, 2000);
    }, [initialValue, itemName])

    const updateItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    // Si se retorna mas de un valor se recomienda un objeto en lugar de un array
    // Esto para ya no preocuparse del orden de los valores
    return {
        item,
        updateItem,
        loading,
        error
    }
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar curso React', completed: false },
//   { text: 'Ir a Gym', completed: false },
//   { text: 'Actualizar LinkedIn', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))