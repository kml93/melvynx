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
    {
      id: 2,
      text: 'Aller dormir à 22h',
      completed: true,
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

const TodoForm = ({ initialTodo, onAddTodo }) => {
  const [todo, setTodo] = useState(initialTodo);

  const handleAddTodo = () => {
    onAddTodo(todo);
    setTodo(initialTodo);
  };

  return (
    <div className="flex w-full items-center gap-2">
      <label className="input input-bordered flex flex-1 items-center gap-2">
        <input
          type="checkbox"
          checked={false}
          className="checkbox checkbox-sm"
          onChange={(event) => event.target.checked === !event.target.checked}
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
  );
};

const TodoItem = ({ singleTodos, onUpdateTodo, onRemoveTodo }) => {
  const { id, text, completed } = singleTodos;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="flex w-full items-center gap-2">
      <div
        className={cn('input flex flex-1 items-center gap-2', {
          'input-bordered': isEditing,
        })}
      >
        <input
          onChange={() => {
            onUpdateTodo(id, {
              ...singleTodos,
              completed: !completed ?? completed,
            });
          }}
          checked={completed}
          type="checkbox"
          className="checkbox checkbox-sm"
        />
        {isEditing ? (
          <input
            onBlur={(event) => {
              onUpdateTodo(id, {
                ...singleTodos,
                text: event.target.value || text,
              });
              setIsEditing(false);
            }}
            ref={(r) => r?.focus()}
            type="text"
            defaultValue={text}
            className="grow"
          />
        ) : (
          <p
            onClick={() => setIsEditing(true)}
            className={cn({
              'line-through text-neutral-content': completed,
            })}
          >
            {text}
          </p>
        )}
      </div>
      <button onClick={() => onRemoveTodo(id)} className="btn btn-ghost">
        <Trash size={16} />
      </button>
    </li>
  );
};

export const Todos = () => {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();

  return (
    <div className="card w-full max-w-md border border-base-300 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Todos</h2>
        <TodoForm initialTodo={''} onAddTodo={addTodo} />
        <div className="divider">List</div>
        <ul className="space-y-2">
          {todos.length > 0 ? (
            todos.map((singleTodos) => (
              <TodoItem
                key={singleTodos.id}
                singleTodos={singleTodos}
                onUpdateTodo={updateTodo}
                onRemoveTodo={removeTodo}
              />
            ))
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
