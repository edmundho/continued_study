#
# Complete the 'alternatingParityPermutations' function below.
#
# The function is expected to return a 2D_INTEGER_ARRAY.
# The function accepts INTEGER n as parameter.
#

def alternatingParityPermutations(n)
  # return nil if n < 1 || n > 11
  
  answer = []
  array = (1..n).to_a
  
  permutations = permutations(array)

  permutations.each do |perm|
    answer << perm if alternating_parity(perm)
  end
  
  answer.sort
end

def permutations(array)
  return [array] if array.empty?
  
  el_to_splice = array.shift
  perms = permutations(array)
  perms_list = []
  
  perms.each do |perm|
    (perm.length + 1).times do |i|
      perms_list << perm[0...i] + [el_to_splice] + perm[i..-1]
    end
  end
  
  perms_list
end

def alternating_parity(array)
  i = 0
  
  while i < array.length - 1
    el = array[i]
    next_el = array[i + 1]
    
    # if current el & next el are same parity, return false
    if el.even? && next_el.even?
      return false
    elsif el.odd? && next_el.odd?
      return false
    end
    
    i += 1
  end
  
  return true
end

