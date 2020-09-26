// Creating multiple objects
var createPolitician = function(name, color) {
    var politician = {};
    politician.name = name;
    politician.color = color;
    politician.electionResults = null;
    politician.totalVotes = 0;

    return politician;
}

var john = createPolitician("John", [132, 17, 11]);
var jane = createPolitician("Jane", [245, 141, 136]);

// Assigning election results
john.electionResults = [5, 1, 7, 2, 33, 6, 4 , 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

john.electionResults[9] = 1;
jane.electionResults[9] = 28;

john.electionResults[4] = 17;
jane.electionResults[4] = 38;

john.electionResults[43] = 11;
jane.electionResults[43] = 27;

// Tallying votes
politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
}

// Calling the method for each politician
john.tallyUpTotalVotes();
jane.tallyUpTotalVotes();

// Consoling log total votes
console.log(john.totalVotes);
console.log(jane.totalVotes);

// Determining winner
var winner = "?";

if (john.totalVotes > jane.totalVotes) {
    winner = john.name;
} else if (john.totalVotes < jane.totalVotes) {
    winner = jane.name;
} else {
    winner = "DRAW"
}

console.log("The winner is " + winner);