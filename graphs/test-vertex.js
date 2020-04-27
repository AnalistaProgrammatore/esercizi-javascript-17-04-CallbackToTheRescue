const PriorityQueue = require('./structs/Priorityqueue')

class Vertex {
    constructor(...data) {
        this.node = data
    }
}

class Graph {
    constructor() {
        this.vertex = []
        this.edges = {}
    }

    addVertex(data) {
        const newVertex = new Vertex(data)
        this.vertex.push(newVertex)
        this.edges[data] = []
    }

    addDirectEdge(vertex1, vertex2, weight = 1) {
        this.edges[vertex1].push({ vertex: vertex2, weight })
    }

    dijkstra(startVertex) {
        const distances = {}
        const prev = {}
        const pq = new PriorityQueue(this.vertex.length * this.vertex.length)
        distances[startVertex] = 0
        pq.enqueue(startVertex, 0)
        for (const vertex of this.vertex) {
            if (vertex.node != startVertex) {
                distances[vertex] = Infinity

            }
            prev[vertex] = null


        }


        while (!pq.isEmpty()) {
            const minCurrentNode = pq.dequeue()
            const currentVertex = minCurrentNode.data
            for (const neighbor of this.edges[currentVertex]) {
                const distance = distances[currentVertex] + neighbor.weight
                if (distance < distances[neighbor.vertex]) {
                    distances[neighbor.vertex] = distance
                    prev[neighbor.vertex] = currentVertex
                    pq.enqueue(neighbor.vertex, distance)
                }
            }

        }

    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')


graph.addDirectEdge('A', 'C', 100)
graph.addDirectEdge('A', 'B', 3)
graph.addDirectEdge('A', 'D', 4)
graph.addDirectEdge('C', 'D', 3)
graph.addDirectEdge('D', 'E', 8)
graph.addDirectEdge('E', 'F', 10)
graph.addDirectEdge('B', 'G', 9)
console.log(graph)
//vertex: [
//    Vertex { node: [ 'A' ] },
//    Vertex { node: [ 'B' ] },
//    Vertex { node: [ 'C' ] }
//    Vertex { node: [ 'D' ] },
//    Vertex { node: [ 'E' ] },
//    Vertex { node: [ 'F' ] },
//    Vertex { node: [ 'G' ] }
//  ],
//  edges: {
//     A: [
//    { vertex: 'C', weight: 100 },
//    { vertex: 'B', weight: 3 },
//    { vertex: 'D', weight: 4 }
//  ],
//   B: [ { vertex: 'G', weight: 9 } ],
//   C: [ { vertex: 'D', weight: 3 } ],
//   D: [ { vertex: 'E', weight: 8 } ],
//   E: [ { vertex: 'F', weight: 10 } ],
//   F: [],
//   G: []
//  }
//}
