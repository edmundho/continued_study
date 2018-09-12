def product_except_self(nums)
    
    has_zeroes = nums.count(0) > 1
    has_zero = nums.count(0) == 1
    
    if has_zeroes
        result = Array.new(nums.length) { 0 }
        return result
    end
    
    if has_zero
        result = []
        product = 1
        zero_index = nums.index(0)
        nums.each_with_index do |el, i|
            next if i == zero_index
            product *= el
        end
        
        nums.each_with_index do |el, i|
            if i == zero_index
                result << product
                next
            end
            result << 0
        end
        return result
    end
    
    product = nums.reduce(:*)
    result = []
    
    nums.each do |el|
        
        answer = product * (el ** -1).to_f
        result << answer.to_i
    end
    
    result
end