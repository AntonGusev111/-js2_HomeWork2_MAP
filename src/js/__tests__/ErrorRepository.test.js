import ErrorRepository from '../ErrorRepository';

test('should sum', () => {
  const erClass = new ErrorRepository();

  const result = erClass.translate('02');

  expect(result).toBe('error2');
});
