=begin
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> list = new ArrayList<Integer>();

    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode cur = root;

    while(cur!=null || !stack.empty()){
        while(cur!=null){
            stack.add(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        list.add(cur.val);
        cur = cur.right;
    }

    return list;
}
=end

def inorder_traversal(root)
    stack = []
    current = root
    traversal = []
    
    while stack.length > 0 || current != nil
        while current != nil
            stack.push(current)
            current = current.left
        end
        
        current = stack.pop
        traversal.push(current.val)
        current = current.right

    end
    
    traversal
end