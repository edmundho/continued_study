def first_uniq_char(s)
    counts = Hash.new(0)
    
    i = 0
    while i < s.length
        cur = s[i]
        counts[cur] += 1
        
        i += 1
    end
    
    j = 0
    while j < s.length
        cur = s[j]
        return j if counts[cur] == 1
        
        j += 1
    end
    
    return -1
end