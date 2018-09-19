var reverse = function(x) {
    let result = 0;
  
    let string = x.toString();
    let array = string.split('').reverse();
    
    if (x > 0) {
        result = parseInt(array.join(''));
    } else if (x === 0) {
        result = 0;
    } else {
        array = array.slice(0, array.length);
        result = parseInt(array.join('')) * -1;
    }

    if (result < Math.pow(2, 31) * -1 || result > Math.pow(2, 31) - 1) {
      return 0;
    } else {
      return result;
    }
};

console.log(reverse(-123));
console.log(reverse(1534236469));
