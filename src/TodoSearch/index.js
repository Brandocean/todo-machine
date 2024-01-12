import { useContext } from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {
        searchValue, 
        setSearchValue
    } = useContext(TodoContext)

    return (
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                // El event.target es la etiqueta html en este caso: input
                // El event.target.value es el valor dentro del input
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { TodoSearch }