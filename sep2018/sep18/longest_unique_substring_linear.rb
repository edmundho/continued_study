def longest_unique_substring(string)
  map = {}
  result = ""

  i = 0
  j = 0
  while i < string.length
    curr = string[i]

    if map[curr]
      j = [map[curr] + 1, j].max
    end

    substring = string[j..i]
    result = substring if substring.length > result.length
    map[curr] = i

    i += 1
  end

  result
end

one = "abcdedfghjklm"
two = "abcdeabcdfghj"
three = "abcdeabcdefgghijklmnopqr"
four = "abcdefghjkllmnopqr"
five = "abcdeabcdef"
p longest_unique_substring(five)
p longest_unique_substring(four)
p longest_unique_substring(three)
p longest_unique_substring(two)
p longest_unique_substring(one)

six = "uniquestrings"
p longest_unique_substring(six)