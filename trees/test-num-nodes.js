const BinarySearchTree = require ('./BinarySearchTree')

const bst = new BinarySearchTree()

bst.insert(23)
bst.insert(13)
bst.insert(7)
bst.insert(15)
bst.insert(54)
bst.insert(46)
bst.insert(77)
bst.insert(42)
bst.insert(75)
bst.insert(18)
bst.insert(6)
bst.insert(8)
//              23
//           /      \
//          13       54
//         / \       / \
//        7  15     46 77
//       / \   \   /  /
//      6   8  18 42 75
console.log(bst.getNumNodes()) // 12 NODI
