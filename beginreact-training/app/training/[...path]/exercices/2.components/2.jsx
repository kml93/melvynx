const shoesList = [
  {
    image: '/images/shoes-1.png',
    title: 'Shark Shoes',
    description: 'This yellow shoes will make your friend jealous.',
    isNew: true,
    categories: ['sport', 'casual'],
  },
  {
    image: '/images/shoes-2.png',
    title: 'Blue Wheti',
    description:
      'You can wear this shoes with any clothes. It will make you look cool.',
    isNew: true,
    categories: ['casual', 'summer'],
  },
  {
    image: '/images/shoes-3.png',
    title: 'Basic Fit',
    description:
      'You know what? This shoes is the best shoes for you who like to walk.',
    categories: ['walking', 'sport'],
  },
  {
    image: '/images/shoes-4.png',
    title: 'Darku Shoes',
    description:
      'Wow, this shoes is so cool. You can wear it for any occasion.',
    categories: ['formal', 'casual'],
  },
];

const App = () => {
  return (
    <ShoesList>
      {shoesList.map((shoe, index) => (
        <ShoeCard key={index + shoe.title} {...shoe} />
      ))}
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
  const { image, title, description, isNew = false, categories } = props;
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
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Badge key={`${title}-${category}`}>{category}</Badge>
            ))}
          </div>
          <label className="label flex cursor-pointer flex-col gap-1">
            <span className="label-text">Cart</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
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

const Badge = (props) => {
  const { children } = props;
  return <div className="badge badge-outline capitalize">{children}</div>;
};

export default App;
