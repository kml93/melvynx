"use client";

import CardProduct from "@/components/CardProduct";
import { CardProductList } from "@/components/CardProductList";
import Header from "@/components/Header";
import MenuFilter from "@/components/MenuFilter";
import reactCards from "@/data/react-cards";

const Page = ({ searchParams }: { searchParams: { filter: string } }) => {
  const currentFilter = searchParams.filter;
  const uniqueCategories = Array.from(
    new Set(reactCards.map((card) => card.category)),
  );

  return (
    <main className="mx-auto flex h-full max-w-screen-xl flex-col gap-8 px-4 pb-4">
      <Header />
      <div className="flex gap-4 overflow-auto max-md:flex-col">
        <MenuFilter
          categories={uniqueCategories}
          currentFilter={currentFilter}
        />
        <CardProductList>
          {reactCards
            .filter((card) => card.category === currentFilter || !currentFilter)
            .map((card) => (
              <CardProduct
                key={card.name}
                card={card}
                hideCategory={!!currentFilter}
              />
            ))}
        </CardProductList>
      </div>
    </main>
  );
};

export default Page;
