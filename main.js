// need the object model

// Nodes HAVE:
//  exits
//  rules (for direct access e.g. warp songs, loading game, current location)
//  solutions for reaching them
// Exits HAVE:
//  rules
//  a node (probably)
// Rules HAVE:
//  A set function that resolves down to a true/false
//  A list of things that that function relies on
// solutions HAVE....
//  I dunno yet

class Node {
    constructor(id) {
        this.id = id;
        this.rules = [];
        this.exits = [];
    }
}

const nodeMap = {
    nodes: [],
}

// add "home", "field", and "castle"

nodeMap.nodes.push(new Node("home"));
nodeMap.nodes.push(new Node("field"));
nodeMap.nodes.push(new Node("castle"));