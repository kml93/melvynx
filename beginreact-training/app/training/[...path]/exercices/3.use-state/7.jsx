'use client';

import { Mail, User2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line no-unused-vars
export const LoginForm = ({ onSubmitData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('errors:', errors);
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmitData)}>
      <label className="input input-bordered flex items-center gap-2 has-[:invalid]:input-error">
        <Mail size={16} />
        <input
          type="text"
          className="grow"
          placeholder="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match valid email',
            },
          })}
        />
      </label>
      {errors.email && <p className="text-error">{errors.email.message}</p>}
      <label className="input input-bordered flex items-center gap-2 has-[:invalid]:input-error">
        <User2 size={16} />
        <input
          type="text"
          className="grow"
          minLength={3}
          placeholder="user"
          {...register('name', { required: true })}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Logged in !</h2>
          <p>Email : {user.email}</p>
          <p>Name : {user.name}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setUser(null);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <LoginForm
        onSubmitData={(values) => {
          setUser(values);
        }}
      />
    </div>
  );
}
