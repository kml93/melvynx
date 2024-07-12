const shoesList = [
  {
    image: '/images/shoes-1.png',
    title: 'Shark Shoes',
    description: 'This yellow shoes will make your friend jealous.',
    isNew: true,
  },
  {
    image: '/images/shoes-2.png',
    title: 'Blue Wheti',
    description:
      'You can wear this shoes with any clothes. It will make you look cool.',
    isNew: true,
  },
  {
    image: '/images/shoes-3.png',
    title: 'Basic Fit',
    description:
      'You know what? This shoes is the best shoes for you who like to walk.',
  },
  {
    image: '/images/shoes-4.png',
    title: 'Darku Shoes',
    description:
      'Wow, this shoes is so cool. You can wear it for any occasion.',
  },
];

const App = () => {
  return (
    <ShoesList>
      {shoesList.map((shoe) => {
        const { image, title, description, isNew } = shoe;
        return (
          <ShoeCard
            key={title}
            isNew={isNew}
            image={image}
            title={title}
            description={description}
          />
        );
      })}
    </ShoesList>
  );
};

const ShoesList = (props) => {
  const { children } = props;
  return (
    <div {...props} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {children}
    </div>
  );
};

const ShoeCard = (props) => {
  const { image, title, description, isNew = false } = props;
  return (
    <div {...props} className="card w-full bg-base-300 shadow-xl">
      <figure>
        <img
          src={image}
          className="h-32 w-full object-cover object-center"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew ? <NewBadge /> : null}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const NewBadge = (props) => {
  return (
    <div {...props} className="badge badge-secondary">
      NEW
    </div>
  );
};

export default App;
