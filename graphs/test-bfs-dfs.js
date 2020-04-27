const createGraph = require('./create-graph')

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const edges = [['A', 'B'], ['A', 'D'], ['A', 'C'], ['B', 'G'], ['D', 'E'], ['E', 'F']]
//     GRAPH          
//       A           
//     / | \
//    B  C  D         
//    |     |
//    G     E
//          |
//          F
const myGraph = createGraph(vertices, edges)
console.log(myGraph.edges)

myGraph.bfs('A', current => console.log(current)) // A B D C G E F
myGraph.dfs('A', current => console.log(current)) // A C D E F B G
