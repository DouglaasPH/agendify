function calendarCompoent() {
  const currentYear = 2025;
  const isALeapYear =
    (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysPerMonth = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  daysPerMonth[1] = isALeapYear ? 29 : 28;
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return <div></div>;
}

export default calendarCompoent;
