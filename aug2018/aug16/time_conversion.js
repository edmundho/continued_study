function timeConversion(s) {
  const ampm = s.slice(s.length - 2);
  const array = s.slice(0, s.length - 2).split(":");

  if (array[0] === "12" && ampm === "AM") {
    array[0] = "00";
  }

  if (ampm === "PM" && array[0] !== "12") {
    array[0] = (parseInt(array[0]) + 12).toString();
  }

  return array.join(":");
}