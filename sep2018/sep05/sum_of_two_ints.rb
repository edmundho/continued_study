def get_sum(a, b)
    return b if a.zero?
    return a if b.zero?
    
    if a > 0 && b > 0
        array = []
        a.times { array << 1 }
        b.times { array << 1 }
        return array.length
    end
    
    if a < 0 && b < 0
        array = []

        (a * -1).times { array << 1 }
        (b * -1).times { array << 1 }
        return array.length * -1
    end
    
    if a < 0 || b < 0
        smaller = a < b ? a : b
        larger = a > b ? a : b
        
        array = (smaller..larger).to_a
        
        absolute = smaller * -1
        absolute.times { array.pop }
        return array.last
    end
end

p get_sum(-2, 3)
p get_sum(-2, -3)
# p get_sum(2147483647, -2147483648)
p 2147483647 ^ -2147483648