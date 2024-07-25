'use client';

import { faker } from '@faker-js/faker';
import useSWR from 'swr';

const fetcher = (args) => fetch(args).then((res) => res.json());

const useData = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, isError: error, isLoading };
};

const CatFact = () => {
  const { data, isError, isLoading } = useData('https://catfact.ninja/fact');

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
        {isError && <p className="text-error">{isError}</p>}
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
