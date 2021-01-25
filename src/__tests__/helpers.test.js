import { summaryDonations } from '../utils/helpers';
import { convertUSDToTHB } from '../utils/helpers';

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test('`convertUSDToTHB` should convert amount in USD to THB correctly', function () {
    expect(convertUSDToTHB(10)).toEqual(299.8);
  });

});
