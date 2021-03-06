const findAvailableTimes = require('./lib/freetime');

//ISO-8601 date representation

const start = new Date('2020-03-03T17:00:15.000Z');
const end = new Date('2020-03-03T17:30:15.000Z');
const duration = 30;

const events = [
  {
    start: '2020-03-03T16:00:15.000Z',
    end: '2020-03-03T17:00:15.000Z',
  },
  {
    start: '2020-03-03T18:00:15.000Z',
    end: '2020-03-03T18:30:15.000Z',
  },
];

const AvailableSlots = findAvailableTimes(start, end, duration, events);

console.log(AvailableSlots);
