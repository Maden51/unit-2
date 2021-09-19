import unitOrder from '../basic';

test('unitOrder.toEqual', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'варвар', health: 10 },
  ];
  const received = unitOrder(input);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'варвар', health: 10 },
  ];
  expect(received).toEqual(expected);
});
test('unitOrder.not.toBe', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'варвар', health: 10 },
  ];
  const received = unitOrder(input);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'варвар', health: 10 },
  ];
  expect(received).not.toBe(expected);
});
