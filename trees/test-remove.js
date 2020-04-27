const BinarySearchTree = require('./BinarySearchTree')

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
//        ALBERO DI PARTENZA
//              23
//           /      \
//          13       54
//         /  \       / \
//        7   15     46 77
//       / \  /     /  /
//      6  8 18    42 75



//RIMUOVO IL NODO FOGLIA
//              23
//           /      \
//          13       54
//         /  \       / \
//        7   15     46 77
//       / \  /     /  /
//      6  8 18       75
bst.remove(42)



// RIMUOVO IL NODO CON UN SOLO FIGLIO SINISTRO
//              23
//           /      \
//          13       54
//         /  \       / \
//        7   15     46 75
//       / \  /     /  
//      6  8 18    42 
bst.remove(77)



//RIMUOVO IL NODO CON UN SOLO FIGLIO DESTRO
//              23
//           /      \
//          13       54
//         /  \       / \
//        7   18     46 77
//       / \         /  /
//      6  8        42 75
bst.remove(15)





// RIMUOVO IL NODO CON DUE FIGLI
//              23
//           /      \
//          13       54
//         /  \      / \
//        8   15    46 77
//       /      \   /  /
//      6       18 42 75
bst.remove(7)



// RIMUOVO LA RADICE
//             42
//           /      \
//          13       54
//         /  \     / \
//        7   15   46 77
//       / \    \     /
//      6  8    18   75
bst.remove(23)


