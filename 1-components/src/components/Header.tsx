import { ReactSvg } from "@/components/ReactSvg/ReactSvg";
import { LuShoppingBasket, LuUser } from "react-icons/lu";
import ButtonGroup from "./ButtonGroup";
import { Button } from "./ui/button";

export type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const rightHeaderElement = [LuShoppingBasket, LuUser];

  return (
    <header className="flex w-full items-center justify-between gap-8 py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg />
        <span>ReactJourney</span>
      </h1>
      <ButtonGroup>
        {rightHeaderElement.map((Element) => (
          <Button size="icon" variant="ghost" key={Element.name}>
            {<Element size={20} />}
          </Button>
        ))}
      </ButtonGroup>
    </header>
  );
};

export default Header;
