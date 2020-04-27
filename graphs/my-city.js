const createGraph = require('./create-graph')

const vertices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y']
const edges= [['A','B',3],['B','C',3],['B','D',2],['D','E',3],['D','F',5],['D','G',4],['F','G',5],
['G','H',2],['G','J',2],['F','I',4],['I','J',5],['I','K',2],['K','L',2],['J','M',3],['J','W',3],['M','N',5],
['N','O',1],['N','R',2],['O','P',4],['N','P',3],['R','S',1],['R','Q',1],['S','Q',1],['S','W',1],['Q','T',4],
['Q','P',1],['P','T',3],['T','U',2],['U','V',1],['W','V',3],['V','X',2],['X','Y',1]]


const myGraph = createGraph(vertices,edges)
console.log(myGraph.bfs('A', current => console.log(current)))
//A B C D E F G I H J K M W L N S V O R P Q U X T Y
console.log(myGraph.dfs('A', current => console.log(current)))
//A B D G J W V X Y U T P N R O Q S M I K L H F E C
