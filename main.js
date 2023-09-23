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

const nodeContainer = {
    // I don't know what this thing actually does except be a container for all the nodes.
    // The nodes are all just members of this, because that means that you can get a direct
    // reference to any node if you just know the name, which is important.
    // It CAN be responsible for creating the links and setting the rules,
    // but I'm pretty sure that makes it the "god-object" and that's to be avoided.
}

// This could all be hardcoded inside the nodeContainer when I create it,
// but I assume that I want to be reading all this from a JSON file later
// or something.
nodeContainer["home"] = new Node("home");
nodeContainer["field"] = new Node("field");
nodeContainer["castle"] = new Node("castle");