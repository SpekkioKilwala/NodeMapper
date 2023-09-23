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
        // a node LABEL would go here when I need it
        this.rules = [];
        this.exits = [];
    }
}

const nodeContainer = {
    // The nodes are all just members of this, because that means that you can get a direct
    // reference to any node if you just know the name, which is important.
    // (otherwise I might have to use something like eval which is definitely wrong)
    add: function(node) {
        this[node.id] = node;
    }
}

nodeContainer.add(new Node("home"));
nodeContainer.add(new Node("field"));
nodeContainer.add(new Node("castle"));