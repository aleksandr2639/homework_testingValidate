import paySistem from '../paySistem';
import IsValidateInn from '../validator';

const validator = new IsValidateInn(paySistem);

describe('проверка метода algorithmLuna', () => {
    test.each([
      ['valid', '371449635398431', true],
      ['valid', '30569309025904', true],
      ['valid', '6011111111111117', true],
      ['invalid', '1111111111111111', false],
      ['invalid', '411111111', false],
      ['invalid', '123578475', false],
    ])(('Должен быть %s'), (_, input, expected) => {
      expect(validator.algorithmLuna(input)).toBe(expected);
    });
  });