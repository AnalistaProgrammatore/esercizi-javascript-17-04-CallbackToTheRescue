const Graph = require('./Graphs')

const createGraph = (vertex, edges) => {
  let graph = new Graph();
  for (const nodes of vertex) {
    graph.addVertex(nodes);
  }
  edges.forEach((item) =>
    graph.addEdge(item[0], item[1], item[2])
  )
  return graph
}

const vertices = ['a', '2', '3', '4', 'b', '6']
const edges = [['a', '6', 14], ['a', '2', 7], ['a', '3', 9], ['3', '6', 2], ['3', '4', 11], ['6', 'b', 9], ['b', '4', 6]]
const myGraph = createGraph(vertices, edges)
console.log(myGraph)
//Graph {
//  vertex: [ 'a', '2', '3', '4', 'b', '6' ],
//  edges: {
//  {
//    '2': [ { vertex: 'a', weight: 7 } ],
//    '3': [
//      { vertex: 'a', weight: 9 },
//      { vertex: '6', weight: 2 },
//      { vertex: '4', weight: 11 }
//    ],
//    '4': [ { vertex: '3', weight: 11 }, { vertex: 'b', weight: 6 } ],
//    '6': [
//      { vertex: 'a', weight: 14 },
//      { vertex: '3', weight: 2 },
//      { vertex: 'b', weight: 9 }
//    ],
//    a: [
//      { vertex: '6', weight: 14 },
//      { vertex: '2', weight: 7 },
//      { vertex: '3', weight: 9 }
//    ],
//    b: [ { vertex: '6', weight: 9 }, { vertex: '4', weight: 6 } ]
//  }
