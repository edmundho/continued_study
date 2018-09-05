def get_sum(a, b)

  return b if a.zero?
  return a if b.zero?

  while b != 0
    carry = a & b
    a = a ^ b
    b = carry << 1
  end

  p a
  return a
end

p get_sum(-2, 3)
p get_sum(-2, -3)
p get_sum(2147483647, -2147483648)