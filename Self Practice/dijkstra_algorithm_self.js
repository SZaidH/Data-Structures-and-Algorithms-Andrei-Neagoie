//Implementing Dijkstra's algorithm to find out the shortest distance between two locations

//Defining a Priority Queue data structure
class PriorityQueue {
    //Constructor
    constructor() {
        this.values = [];
    }

    //Enqeue method for adding values along with the priority
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    //Dequeue method to remove values
    dequeue() {
        return this.values.shift();
    }

    //Sort method to sort the values in the queue
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

//Defining the Graph Class
class Graph {
    //Constructor
    constructor() {
        this.adjacencyList = {};
    }

    //addVertex method to add vertex/node
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //addEdge method to add an edge
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    //Dijkstra method to implement Dijkstra's algorithm (accepts start and end location)
    dijkstra(start, end) {
        //defining objects and variables
        let pqueue = new PriorityQueue();
        let distance = {};
        let visited = {};
        let path = [];
        let smallest;
        let neighborVertex;
        let candidate;

        //setting up
        for (let vertex in this.adjacencyList) {
            //if the vertex is the same the starting value, distance and priority of the vertex is set to 0
            if (vertex === start) {
                distance[vertex] = 0;
                pqueue.enqueue(vertex, 0);
            }
            //else assign an infinity value to both the distance and the priority
            else {
                distance[vertex] = Infinity;
                pqueue.enqueue(vertex, 0);
            }
            //assigning null to all the visited values as traversal has not been done yet
            visited[vertex] = null;
        }

        //implementation
        //looping through the Priority list until all the values are traversed  
        while (pqueue.values.length) {
            //using the dequeue method to obtain the smallest priority value
            smallest = pqueue.dequeue().val;

            //if the smallest value is equal to the end location, build a return path
            if (smallest === end) {
                while(visited[smallest]){
                    path.push(smallest);
                    smallest = visited[smallest];
                }
                break;
            }

            //otherwise loop through the neighbor vertex in the adjacency list
            //if the smallest value or the distance is not equal to infinity
            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //finding the neighbor vertex
                    neighborVertex = this.adjacencyList[smallest][neighbor];
                    
                    //calculating the distance
                    candidate = distance[smallest] + neighborVertex.weight;

                    //if candidate is less than the distance of the next neighbor
                    if(candidate < distance[neighborVertex.node]){
                        distance[neighborVertex.node] = candidate;
                        visited[neighborVertex.node] = smallest;
                        pqueue.enqueue(neighborVertex, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

// Defining a variable to initialize the Weighted Graph
let graph = new Graph();

//Adding the vertex(Refer to Graph.png for a visual representation of the graph)
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

//Adding the edges
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

//Result
console.log(graph.dijkstra("A", "F"));