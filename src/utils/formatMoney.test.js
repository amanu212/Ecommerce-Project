import { it, expect,describe } from 'vitest';
import { formatMoney } from './formatMoney';


describe('formatMoney', () => {
  it('formats money correctly', () => {
    expect(formatMoney(123456)).toBe('$1234.56');
  });
  
  it('displays two decimal places', () => {
    expect(formatMoney(123456)).toBe('$1234.56');
    expect(formatMoney(100)).toBe('$1.00');
  });
}
)