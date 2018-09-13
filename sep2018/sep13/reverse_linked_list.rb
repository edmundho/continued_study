def reverse_list(head)
    current = head
    prev = nil
    
    while current
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    end
    
    prev
end