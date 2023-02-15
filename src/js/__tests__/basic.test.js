import matchers from '../basic';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('matchers', () => {
  const result = matchers(heroes);
  expect(result).toEqual(heroes);
});
