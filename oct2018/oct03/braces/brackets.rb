# Complete the braces function below.
require 'set'
def braces(values)
  answer = []
  
  # use sets for O(1) lookup
  openers = ['{', '(', '['].to_set
  closers = ['}', ')', ']'].to_set
  
  values.each do |input|
    # use stack to keep track of opening & closing braces
    stack = []
    
    # we will set early_end to true 
    # if we break out of iterating over the string early
    early_end = false
    
    # if first ch in string is a closing brace, automatic "NO"
    if closers.include?(input[0])
      answer.push("NO")
      next
    end
    
    input.each_char do |ch|
      
      if openers.include?(ch)
        stack.push(ch)
      elsif closers.include?(ch)
        if stack.last == '(' && ch == ')'
          stack.pop
        elsif stack.last == '{' && ch == '}'
          stack.pop
        elsif stack.last == '[' && ch == ']'
          stack.pop
        else
          answer.push("NO")
          early_end = true
          break
        end
      end
    end

    # if we are done with iterating over the string
    # we will push in our answer only if we didn't terminate early
    if !early_end
      if stack.empty?
        answer.push("YES")
      else
        answer.push("NO")
      end
    end
  end

  answer
end

