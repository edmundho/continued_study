def longest_unique_substring(string)
  result = ""

  i = 0 
  while i < string.length - 1

    j = i + 1
    while j < string.length 
    
      substring = string[i..j]
      if unique(substring) && substring.length > result.length
        result = substring
      end
      
      j += 1
    end
    i += 1
  end 

  result
end

def unique(string)
  counts = {}

  i = 0
  while i < string.length
    curr = string[i]
    if counts[curr]
      return false
    else
      counts[curr] = 1
    end
    
    i += 1
  end
  return true
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