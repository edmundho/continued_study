def fizz_buzz(n)
    result = [];
    
    i = 1
    while i <= n
        if i % 3 == 0 && i % 5 == 0
            result << "FizzBuzz"
        elsif i % 5 == 0
            result << "Buzz"
        elsif i % 3 == 0
            result << "Fizz"
        else
            result << i.to_s
        end
        
        i += 1
    end
    
    result
end