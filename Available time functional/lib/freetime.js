function dateClone(val) {
  return new Date(val);
}

function toDate(val) {
  if (val instanceof Date) return val;
  return new Date(val);
}

function dateExtend(date, DurationMS) {
  date.setTime(date.getTime() + DurationMS);
}

function findAvailableTimes(start, end, duration, eventsArray) {
  const DurationMS = duration * 60000;
  const timeslotStart = dateClone(start);
  const timeslotEnd = dateClone(start);
  dateExtend(timeslotEnd, DurationMS);
  function eventOverlap({ start: start2, end: end2 }) {
    return timeslotStart >= toDate(start2) && timeslotStart < toDate(end2);
  }
  const array = [];
  while (timeslotStart <= toDate(end)) {
    const found = eventsArray.some(eventOverlap);
    if (found === false) {
      array.push({
        start: dateClone(timeslotStart),
        end: dateClone(timeslotEnd),
      });
    }
    dateExtend(timeslotStart, DurationMS);
    dateExtend(timeslotEnd, DurationMS);
  }
  return array;
}

module.exports = findAvailableTimes;
