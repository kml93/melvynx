export type CardProductListProps = {
  children: React.ReactNode;
};

export const CardProductList = (props: CardProductListProps) => {
  const { children } = props;
  return (
    <section className="size-full overflow-auto pr-1">
      <div className="flex h-fit flex-row flex-wrap gap-4 pb-1">{children}</div>
    </section>
  );
};
