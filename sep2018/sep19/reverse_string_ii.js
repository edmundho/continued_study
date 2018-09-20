var reverseStr = function (s, k) {
  let array = s.split('');

  let result = "";
  let step = 2 * k;

  let i = 0; 
  while (i < array.length) {
    console.log("i is:", i);
    console.log("step is:", step);
    console.log("result is:", result);
    if (i < step - k) {
      let substring = array.slice(i, i + k);
      console.log("substring:", substring.length);
      result += substring.reverse().join('');
      i += k;
    } else if (i === step) {
      step += 2 * k;
    } else {
      result += array[i];
      i++;
    }
  }

  return result;
};

let one =
  "krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc";

let two = "abcdefg";
let three = "abcdefghijklmnopqr";
// console.log(reverseStr(one, 20));
console.log(reverseStr(two, 2)); // "bacdfeg"
// console.log(reverseStr(three, 3));