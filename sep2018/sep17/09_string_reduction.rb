=begin

String Reduction

You are given a string of characters and you are required to reduce it to replace all occurrences of two or more consecutive "e's" with a single "e".

Example: 
Input: "asdheeeeskaeeeleee"
Output: "asdheskaele"

=end

def string_reduction(string)
  p string
  result = ""
  
  i = 0
  while i < string.length
    curr = string[i]

    if curr == "e" && string[i + 1] != "e"
      result << curr
    elsif curr == "e"
      i += 1
      next
    else
      result << curr
    end
    
    i += 1
  end

  result
end

p string_reduction("asdheeeeskaeeeleee")