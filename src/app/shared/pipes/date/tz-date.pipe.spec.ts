import { TzDatePipe } from './tz-date.pipe';

const date = 1567721704000;
const FORMAT = 'MMM D YYYY, hh:mm';

describe('Date Pipe', () => {
  const pipe = new TzDatePipe();

  it('Date format should look like "MMM D YYYY, hh:mm"', () => {
    // timezone might cause issue of failing this test, if that would be the case
    // then update the time accordingly coz moment timezone didn't added.
    expect(pipe.transform(date, FORMAT)).toContain('Sep 6 2019, 03:15');
  });
});
