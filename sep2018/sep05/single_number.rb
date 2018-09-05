def single_number(nums)
    count = Hash.new(0)
    
    i = 0
    while i < nums.length
        num = nums[i]
        count[num] += 1
        
        i += 1
    end

    j = 0
    while j < nums.length
        num = nums[j]
        return num if count[num] == 1
        
        j += 1
    end
end

p single_number([4,1,2,1,2])