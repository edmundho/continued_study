def move_zeroes(nums)
    front = 0
    
    i = 0
    while i < nums.length
        if nums[i] != 0
            nums[front] = nums[i]
            front += 1
        end
        
        i += 1
    end
    
    while front < nums.length
        nums[front] = 0
        
        front += 1
    end
    
    nums
end