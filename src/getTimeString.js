export default function getTimeString(timeNumber) {
  let timeString = timeNumber.toFixed();

  if (timeString.length % 2 > 0) {
    timeString = `0${timeString}`;
  }
  return timeString;
}
