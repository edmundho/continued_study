def is_palindrome(x)
    x = x.to_s
    
    front = 0
    back = x.length - 1
    
    while front < back
        if x[front] == x[back]
            front += 1
            back -= 1
        else
            return false
        end
    end
    
    return true
end