import React from 'react';
import { TodoIcon } from '.'; // Como se encuentra en la misma carpeta se importa asi

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
