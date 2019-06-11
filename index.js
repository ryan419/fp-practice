const { prop, Maybe, compose, chain } = require('@mostly-adequate');

const user = {
  id: 1,
  name: 'Albert',
  address: {
    street: {
      number: 22,
      name: 'Walnut St',
    },
  },
};

const safeProp = compose(
  Maybe.of,
  prop,
);

const getStreetName = compose(
  chain(safeProp('name')),
  chain(safeProp('street')),
  safeProp('address'),
);
