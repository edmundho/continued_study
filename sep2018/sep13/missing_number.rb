def missing_number(nums)
    n = nums.length
    non_missing_sum = (0..n).to_a.reduce(:+)
    
    missing_sum = nums.reduce(:+)
    
    non_missing_sum - missing_sum
end