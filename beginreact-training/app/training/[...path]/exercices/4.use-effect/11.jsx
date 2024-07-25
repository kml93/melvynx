'use client';

import { faker } from '@faker-js/faker';
import { Suspense, use } from 'react';

const fetchCatFact = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Server not response');
  return await response.json();
};

const CatFact = () => {
  const data = use(fetchCatFact('https://catfact.ninja/fact'));

  return (
    <div className="card card-compact mx-auto w-96 max-w-sm bg-base-200 shadow-xl">
      <figure>
        <img
          src={faker.image.urlLoremFlickr({ category: 'cat' })}
          alt="Cat"
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cat fact</h2>
        <p>{data.fact}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <CatFact />
      </Suspense>
    </div>
  );
}
