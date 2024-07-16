import { ReactSvg } from "@/components/ReactSvg/ReactSvg";
import { LuShoppingBasket, LuUser } from "react-icons/lu";
import { Button } from "./ui/button";

export type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const rightHeaderElement = [LuShoppingBasket, LuUser];

  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className="inline-flex items-center gap-2 text-xl font-bold">
        <ReactSvg />
        <span>ReactJourney</span>
      </h1>
      <div className="flex items-center gap-4">
        {rightHeaderElement.map((Element) => (
          <Button size="icon" variant="link" key={Element.name}>
            {<Element size={20} />}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
