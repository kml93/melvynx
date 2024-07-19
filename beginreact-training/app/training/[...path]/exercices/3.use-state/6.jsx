'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

const findDuplicate = (stringToFind, key, array) => {
  return !array.find(
    (element) => element[key].toLowerCase() === stringToFind.toLowerCase()
  );
};

export const Todos = () => {
  const initialTodo = '';
  const initialTodos = [
    {
      id: 1,
      text: 'Faire les courses',
      completed: false,
    },
  ];

  const [todo, setTodo] = useState(initialTodo);
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (inputValue) => {
    if (inputValue.length > 0 && findDuplicate(inputValue, 'text', todos)) {
      const dataTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodo(initialTodo);
      return setTodos((curr) => [...curr, dataTodo]);
    }
  };

  return (
    <div className="card w-full max-w-md border border-base-300 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Todos</h2>
        <div className="flex w-full items-center gap-2">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <input
              type="checkbox"
              checked={false}
              className="checkbox checkbox-sm"
              onChange={(event) =>
                event.target.checked === !event.target.checked
              }
            />
            <input
              type="text"
              className="grow"
              placeholder="Some task"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && addTodo(todo)}
            />
          </label>
          <button className="btn btn-primary" onClick={() => addTodo(todo)}>
            <Plus size={22} />
          </button>
        </div>
        <div className="divider">List</div>
        <ul className="space-y-2">
          {todos.map((singleTodos) => {
            const { id, text, completed } = singleTodos;
            return (
              <li key={id} className="flex w-full items-center gap-2">
                <label className="input input-bordered flex flex-1 items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={completed}
                    onChange={(event) =>
                      event.target.checked === !event.target.checked
                    }
                  />
                  <p>{text}</p>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex w-full justify-center">
      <Todos />
    </div>
  );
}
