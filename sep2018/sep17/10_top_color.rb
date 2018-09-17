=begin

Top Color

Return the color that occurs most frequently. In case of a tie, return the most frequent color sorted alphabetically.

  Args:
  Image: a nested list of color values.

  Example 1:
  Input: 
  [
    ['red', 'red', 'green'],
    ['black', 'blue', 'black'],
    ['red', 'yellow', 'yellow']
  ]

  Expected Output: 
  ['red']

  Example 2:
  Input:
  [
    ['red', 'green', 'green'],
    ['black', 'blue', 'black'],
    ['red', 'yellow', 'yellow']
  ]

  Expected Output:
  ['black', 'green', 'red', 'yellow']

=end

def top_color(list)
  counts = Hash.new(0)

  list.each do |sublist|
    sublist.each do |color|
      counts[color] += 1
    end
  end

  max = counts.values.max

  result = []
  counts.each do |k, v|
    result << k if v == max
  end

  result.sort
end

# ------------------------------------------------
one = [
  ['red', 'red', 'green'],
  ['black', 'blue', 'black'],
  ['red', 'yellow', 'yellow']
]

two = [
  ['red', 'green', 'green'],
  ['black', 'blue', 'black'],
  ['red', 'yellow', 'yellow']
]


p top_color(one) # => ['red']
p top_color(two) # => ['black', 'green', 'red', 'yellow']