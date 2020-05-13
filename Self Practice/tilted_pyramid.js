// Create a tilted pyramid. For example -
// *
// * *
// * * *
// * * * *
// * * * 
// * *
// * 

function createPyramid(peak) {
    // Loop until the pyramid reaches the peak
    let node1 = "p";
    let node2 = "p";
    let pyramid = [];
    for (let i = 0; i < peak; i++) {
        if (!pyramid[0]) {
            pyramid[0] = node1;
            console.log(pyramid[0]);
        }
        else {
            node1 = pyramid[i - 1];
            node2 += node1;
            pyramid.push(node2);
            console.log(pyramid[i]);

        }
        node2 = "p ";
    }
    // Loop again to descend from peak to ground
    for (let i = peak-1; i > 0; i--) {
        console.log(pyramid[i-1]);
        pyramid.pop();
    }
    // Return a message
    return `The tilted pyramid stands ${peak} peak tall`;
}

// Pyramid peak point
let peak = 5;

console.log(createPyramid(peak)); //0(n);