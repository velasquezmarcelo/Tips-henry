// function SolveGraph (graph, start, end) {
//   // Your code here:
//   //usar recurcion
// }
// // Solución 1
// function SolveGraph (graph, start, target, visited = []) { 
//   // 2° vuelta >>> start = 'c', target = 'r', visited = ['a', 'c'] >>> true
//   // 1° vuelta >>> start = 'a', target = 'r', visited = ['a'] <pending>
//   if(visited.includes(start)) return;
//   visited.push(start);

//   for(const node of graph[start]){ // 2° ['s', 'r'] 
//     if(node === target) return true; // 'r' === 'r' ???
//     if(SolveGraph(graph, node, target, visited)) return true;
//   }

//   return false;
// }

// Solución 2
function SolveGraph (graph, start, target, visited = {}) { 
  if(visited[start]) return;
  visited[start] = true;
  console.log(visited);

  for(const node of graph[start]){ // 2° ['s', 'r'] 
    if(node === target) return true; // 'r' === 'r' ???
    if(SolveGraph(graph, node, target, visited)) return true;
  }

  return false;
}
// Complejidad >>> O(n*log(n))

const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z']
}

console.log(SolveGraph(graph, 'a', 'r'))

module.exports = SolveGraph
