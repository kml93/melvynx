'use client';

import { User2 } from 'lucide-react';
import { useState } from 'react';

const NameForm = ({ initialName: initialNameInputState = '' }) => {
  const [inputName, setInputName] = useState(initialNameInputState);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card w-full max-w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name :</h2>
          {inputName.length > 0 ? (
            <p>{inputName}</p>
          ) : (
            <p className="text-error">No name</p>
          )}
        </div>
      </div>
      <div className="divider">Form</div>
      <label className="input input-bordered flex items-center gap-2">
        <User2 size={16} />
        <input
          type="text"
          className="grow"
          placeholder="Enter your name"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
      </label>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <NameForm />
      <NameForm initialName="" />
      <NameForm initialName="Kamil" />
    </div>
  );
}
