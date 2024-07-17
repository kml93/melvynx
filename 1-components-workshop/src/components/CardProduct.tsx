import { cn } from "@/lib/utils";
import { LuBookOpen, LuPlusCircle } from "react-icons/lu";
import ButtonGroup from "./ButtonGroup";
import { ReactSvg } from "./ReactSvg/ReactSvg";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";

export type CardProductProps = {
  title: string;
  category: string;
  urlDocs: string;
  allCategory: string;
  categoryChosen: string;
};

const CardProduct = (props: CardProductProps) => {
  const { title, category, urlDocs, allCategory, categoryChosen } = props;

  const rightCardElement = [LuBookOpen, LuPlusCircle];

  const buttonGroupMap = rightCardElement.map((Element) => {
    const iconElement = <Element size={16} />;
    return (
      <Button size="icon" variant="secondary" key={Element.name}>
        {Element === LuBookOpen ? (
          <a href={urlDocs} target="_blank">
            {iconElement}
          </a>
        ) : (
          iconElement
        )}
      </Button>
    );
  });

  return (
    <Card className="flex w-1/3 grow flex-col justify-between gap-4 rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 max-[480px]:w-full md:w-1/4">
      <div className="flex items-center gap-2">
        <ReactSvg />
        <span className="text-base font-bold">React</span>
      </div>

      <CardTitle className="overflow-hidden text-ellipsis text-wrap text-center text-lg font-extrabold">
        {title}
      </CardTitle>

      <div
        className={cn(
          "flex items-center justify-between gap-4",
          categoryChosen !== allCategory && "justify-end",
        )}
      >
        {categoryChosen === allCategory ? (
          <p className="overflow-hidden text-ellipsis text-start text-xs text-gray-400">
            {category}
          </p>
        ) : null}

        <ButtonGroup className="gap-2">{buttonGroupMap}</ButtonGroup>
      </div>
    </Card>
  );
};

export default CardProduct;
