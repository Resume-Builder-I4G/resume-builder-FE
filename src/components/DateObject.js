const arrayOfYears = () => {
  var max = new Date().getFullYear();
  var min = max - 30;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

const arrayOfMonths = [
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
export { arrayOfYears, arrayOfMonths };
