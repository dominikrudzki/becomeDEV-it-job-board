import { TimeFromDatePipe } from './time-from-date.pipe';

describe('TimeFromDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TimeFromDatePipe();
    expect(pipe).toBeTruthy();
  });
});
