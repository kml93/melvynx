'use client';

import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

const CatFact = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('https://catfact.ninja/fact', {
      signal: abortController.signal,
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(`HTTP error! Status: ${response.status}`);
      })
      .then((data) => {
        setIsError(false);
        setData(data);
      })
      .catch(() => {
        setIsError(true);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

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
        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {isError && (
          <p className="text-error">
            Something went wrong while fetching the cat fact
          </p>
        )}
        {data && <p>{data.fact}</p>}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <CatFact />
    </div>
  );
}
