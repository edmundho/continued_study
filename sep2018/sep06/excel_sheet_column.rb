def title_to_number(s)
    alphabet = {}
    ("A".."Z").to_a.each_with_index do |letter, i|
        alphabet[letter] = i + 1
    end

    result = 0
    
    i = 0 
    while i < s.length
        current = s[i]
        
        if i > 0
            result = result * 26 + alphabet[current]
        else
            result += alphabet[current]
        end
            
        i += 1
    end
    
    result
end