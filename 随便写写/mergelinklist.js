//伪代码emm，链表对JavaScript不友好
// 每次返回一个节点，插入链表中
function merge(pHead1,pHead2){
    if(!pHead1){
        return pHead2;
    }
    if(!pHead2){
        return pHead1;
    }
    if(pHead1.val<=pHead2.val){
        pHead1.next=merge(pHead1.next,pHead2);
        return pHead1;
    }else{
        pHead2.next=merge(pHead1,pHead2.next);
        return pHead2;
    }
}
