def reverse_string(s)
    result = ''
    
    i = s.length - 1
    while i >= 0
        result.concat(s[i])
        
        i -= 1
    end

    result
end