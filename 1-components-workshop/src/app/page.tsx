"use client";

import CardProduct from "@/components/CardProduct";
import { CardProductList } from "@/components/CardProductList";
import Header from "@/components/Header";
import MenuFilter from "@/components/MenuFilter";
import reactCards from "@/data/react-cards";
import { useState } from "react";

const Page = () => {
  const uniqueCategories = Array.from(
    new Set(reactCards.map((card) => card.category)),
  );

  const allString = "all";
  uniqueCategories.unshift(allString);
  const [isActiveCategory, setIsActiveCategory] = useState(allString);

  return (
    <main className="mx-auto flex h-full max-w-screen-xl flex-col gap-8 px-4">
      <Header />
      <div className="flex gap-4 overflow-auto max-md:flex-col">
        <MenuFilter
          isActive={isActiveCategory}
          setIsActive={setIsActiveCategory}
        >
          {uniqueCategories}
        </MenuFilter>
        <CardProductList>
          {reactCards.map((card) => (
            <CardProduct
              key={card.name}
              title={card.name}
              category={card.category}
              urlDocs={card.url}
              allCategory={allString}
              categoryChosen={isActiveCategory}
            />
          ))}
        </CardProductList>
      </div>
    </main>
  );
};

export default Page;
