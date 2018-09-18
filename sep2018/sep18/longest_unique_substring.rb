def longest_unique_substring(string)
  indices = {}
  result = ""


  substring = ""
  i = 0
  while i < string.length
    current = string[i]

    if !indices[current]
      indices[current] = i
      substring << current
      # p substring
      p indices
    else
      if substring.length > result.length
        result = substring
      end

      first_instance = indices[current]
      substring = string[first_instance + 1]
      indices[current] = nil
      i = first_instance + 1
      p substring
    end

    i += 1
  end

  result = substring.length > result.length ? substring : result
end

one = "abcdedfghjklm"
two = "abcdeabcdfghj"
three = "abcdeabcdefgghijklmnopqr"
four = "abcdefghjkllmnopqr"
p longest_unique_substring(two)
# p longest_unique_substring(four)