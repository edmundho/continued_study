def add_two_numbers(l1, l2)
    # reverse l1 first
    current = l1

    num1 = ""
    num2 = ""
    
    while current
        num1 += current.val.to_s

        current = current.next
    end
    
    # reverse l2 next
    current = l2
    
    while current
        num2 += current.val.to_s
        current = current.next
    end
    
    r1 = num1.reverse.to_i
    r2 = num2.reverse.to_i
    sum = (r1 + r2).to_s.reverse
    
    newList = nil
    current = newList
    
    i = 0
    while i < sum.length
        val = sum[i]
        if !newList
            newList = ListNode.new(val)
            current = newList
        else
            newNode = ListNode.new(val)
            current.next = newNode
            current = current.next
        end
        
        i += 1
    end
    
    newList
end