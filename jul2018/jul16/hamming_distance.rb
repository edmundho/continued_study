# @param {Integer} x
# @param {Integer} y
# @return {Integer}
def hamming_distance(x, y)
  binary_x = to_binary(x)
  binary_y = to_binary(y)

  longer_string = binary_x.length > binary_y.length ? binary_x : binary_y
  shorter_string = binary_x.length > binary_y.length ? binary_y : binary_x

  longer_string = longer_string.split("")
  shorter_string = shorter_string.split("")

  until shorter_string.length == longer_string.length
    shorter_string.unshift("0")
  end

  counter = 0;
  i = 0;
  while i < longer_string.length
    if shorter_string[i] != longer_string[i]
      counter += 1
    end
    i += 1
  end

  counter
end

def to_binary(num)
  result = []

  while num > 0
    result.unshift(num % 2)
    num /= 2
  end

  result.empty? ? "0" : result.join
end

p hamming_distance(1, 4) == 2