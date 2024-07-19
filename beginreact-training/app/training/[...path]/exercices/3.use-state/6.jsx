'use client';

import { cn } from '@/src/utils/cn';
import { Plus, Trash } from 'lucide-react';
import { useState } from 'react';

const findDuplicate = (stringToFind, key, array) => {
  return !array.some(
    (element) => element[key].toLowerCase() === stringToFind.toLowerCase()
  );
};

const useTodos = () => {
  const initialTodos = [
    {
      id: 1,
      text: 'Faire les courses',
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (valueInput) => {
    if (valueInput.length > 0 && findDuplicate(valueInput, 'text', todos)) {
      const newDataTodo = {
        id: Date.now(),
        text: valueInput,
        completed: false,
      };
      return setTodos((curr) => [...curr, newDataTodo]);
    }
  };

  const updateTodo = (id, newTodo) => {
    // const todoToUpdate = todos.find((element) => element.id === idInput);
    return setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));
  };

  const removeTodo = (id) => {
    const updatedTodo = todos.filter((element) => element.id !== id);
    return setTodos(updatedTodo);
  };

  return { todos, addTodo, updateTodo, removeTodo };
};

export const Todos = () => {
  const initialTodo = '';
  const [todo, setTodo] = useState(initialTodo);
  const [editingId, setEditingId] = useState(null);
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo(initialTodo);
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
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleAddTodo()}
              type="text"
              className="grow"
              placeholder="Some task"
            />
          </label>
          <button onClick={() => handleAddTodo()} className="btn btn-primary">
            <Plus size={22} />
          </button>
        </div>
        <div className="divider">List</div>
        <ul className="space-y-2">
          {todos.length > 0 ? (
            todos.map((singleTodos) => {
              const { id, text, completed } = singleTodos;
              return (
                <li className="flex w-full items-center gap-2" key={id}>
                  <div
                    className={cn('input flex flex-1 items-center gap-2', {
                      'input-bordered': editingId === id,
                    })}
                  >
                    <input
                      onChange={() => {
                        updateTodo(id, {
                          ...singleTodos,
                          completed: !completed ?? completed,
                        });
                      }}
                      checked={completed}
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                    {editingId === id ? (
                      <input
                        onBlur={(event) => {
                          updateTodo(id, {
                            ...singleTodos,
                            text: event.target.value || text,
                          });
                          setEditingId(null);
                        }}
                        ref={(r) => r?.focus()}
                        type="text"
                        defaultValue={text}
                        className="grow"
                      />
                    ) : (
                      <p
                        onClick={() => setEditingId(id)}
                        className={cn({
                          'line-through text-neutral-content': completed,
                        })}
                      >
                        {text}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removeTodo(id)}
                    className="btn btn-ghost"
                  >
                    <Trash size={16} />
                  </button>
                </li>
              );
            })
          ) : (
            <p className="text-neutral-content">Empty</p>
          )}
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
