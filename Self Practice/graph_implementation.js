// Create an undirected graph featuring flights between countries

class Graph{
    constructor(){
        // adjacency List to house key and value pairs
        this.adjacencyList = {};
    }

    // method to add vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    // method to add edge
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return `The city does not exist`;
        }else{
            // connecting both the vertex to each other since the graph is undirected
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Riyadh");
graph.addVertex("Dubai");
graph.addEdge("Riyadh","Dubai");
graph.addEdge("Dubai","Tokyo");
console.log(graph);