function ListNode(val) {

    this.val = val;
    
    this.next = null;
    
    }
    
    
    
    
    let head = new ListNode(4);
    
    head.next = new ListNode(5);
    
    head.next.next = new ListNode(1);
    
    head.next.next.next = new ListNode(9);

console.log(listNodeToString(head));
// write a function that represents a linked list as an array

function listNodeToString(node) {
// store nodes into an array
let list = []
let current = node

  while (current !== null ){
    list.push(current.val)
    current=current.next
} 

return list
}