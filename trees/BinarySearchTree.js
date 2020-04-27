class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
    this.count = 0                   //CONTEGGIO DEI NODI

    this.compare = (node, newNode) => {  //FUNZIONE DI COMPARAZIONE
      if (node < newNode) return '<'
      if (node > newNode) return '>'
      return '='
    }

    this.getNumEdges = (node = this.root) => {   //FUNZIONE PER IL CONTEGGIO DELLE CONNESSIONI
      if (node.left != null) {
        this.getNumEdges(node.left)
        this.count++
      }
      if (node.right != null) {
        this.getNumEdges(node.right)
        this.count++
      }
      return this.count
    }

    this.insertNode = (node, newNode) => {
      if (this.compare(newNode.data, node.data) === '<') {
        if (node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }

    this.removeNode = (node, key) => {

      if (node === null)
        return null;

      if (this.compare(key, node.data) === '<') {
        node.left = this.removeNode(node.left, key);
        return node;
      }

      else if (this.compare(key, node.data) === '>') {
        node.right = this.removeNode(node.right, key);
        return node;
      }
// CASO 1 IL NODO DA RIMUOVERE E' UNA FOGLIA -> IL CASO PIU SEMPLICE 
      else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        // CASO 2 IL NODO DA RIMUOVERE HA UN SOLO FIGLIO 
        if (node.left === null) {
          node = node.right;
          return node;
        }

        else if (node.right === null) {
          node = node.left;
          return node;
        }
      }

      // CASO 3 IL NODO DA RIMUOVERE HA DUE FIGLI 
      // DEVO:
      //1. Cercare il valore minimo nel sottoalbero di destra (quindi il minimo dei maggiori)
      // 2. Devo sostituire il valore minimo trovate con il valore corrente del nodo che sto analizzando
      // 3. Devo eliminare il nodo minimo trovato al passo 1
      //
      let min = this.getMin(node.right)
      node.data = min
      node.right = this.removeNode(node.right, min)
      return node
    }
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      return this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  getMin(node = this.root) {
    if (node.left === null) {
      return node.data
    } else {
      return this.getMin(node.left)     //RICORSIONE
    }
  }

  getMax(node = this.root) {
    if (node.right === null) {
      return node.data
    } else {
      return this.getMax(node.right)     //RICORSIONE
    }
  }

  getRoot() {
    return this.root
  }

  preorder(node, callback) {         // AGGIUNGO LA CALLBACK COME ARGOMENTO DELLA FUNZIONE
    if (node !== null) {
      this.preorder(node.left, callback)
      this.preorder(node.right, callback)
      callback(node)                  //CHIAMO LA CALLBACK
    }

  }
  postorder(node, callback) {         // AGGIUNGO LA CALLBACK COME ARGOMENTO DELLA FUNZIONE
    if (node !== null) {
      this.postorder(node.left, callback)
      this.postorder(node.right, callback)
      callback(node)                   // CHIAMO LA CALLBACK
    }
  }

  inorder(node, callback) {           // AGGIUNGO LA CALLBACK COME ARGOMENTO DELLA FUNZIONE
    if (node !== null) {
      this.inorder(node.left, callback)
      callback(node)                 //CHIAMO LA CALLBACK
      this.inorder(node.right, callback)
    }
  }


  find(node, data) {
    if (node === null) return null
    if (this.compare(data, node.data) === '<') {
      return this.find(node.left, data)
    } else if (this.compare(data, node.data) === '>') {
      return this.find(node.right, data)
    } else {
      return node
    }
  }

  getNumNodes() {                    //FUNZIONI PER IL CONTEGGIO DEI NODI, L'HO SCRITTA QUI PER NON RADDOPPIARE IL CONTEGGIO DI COUNT
    this.count = 0
    let nodes = this.getNumEdges()
    return nodes + 1
  }

}

module.exports = BinarySearchTree
