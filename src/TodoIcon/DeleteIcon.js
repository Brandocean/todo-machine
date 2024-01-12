import React from 'react';
import { TodoIcon } from '.'; // Como se encuentra en la misma carpeta se importa asi

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
