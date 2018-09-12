def majority_element(nums)
    amount = 0
    majority_el =  nil
    
    counts = Hash.new(0)
    
    nums.each do |el|
        counts[el] += 1
    end
    
    counts.each do |key, val|
        if val > amount
            amount = val
            majority_el = key
        end
    end
    
    majority_el
end