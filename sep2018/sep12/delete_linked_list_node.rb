def delete_node(node)
    current = node
    next_node = node.next
    
    while next_node
        new_tail = current if next_node.next.nil?
        current.val = next_node.val
        current = next_node
        next_node = next_node.next
    end
    
    new_tail.next = nil
end