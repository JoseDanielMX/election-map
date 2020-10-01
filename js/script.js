// Creating multiple objects
var createPolitician = function(name, color) {
    var politician = {};
    politician.name = name;
    politician.color = color;
    politician.electionResults = null;
    politician.totalVotes = 0;

    // Tallying votes
    politician.tallyUpTotalVotes = function() {
        this.totalVotes = 0;
        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };
    
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

// Assigning the winner of each state
var setStateResults = function(state) {
    theStates[state].winner = null;
    if (john.electionResults[state] > jane.electionResults[state]) {
        theStates[state].winner = john;
    } else if (john.electionResults[state] < jane.electionResults[state]) {
        theStates[state].winner = jane;
    }
    // Changing the color of each state based on the winner
    var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.color;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }    
    // Adding data to the HTML state results table
    var stateDataTable = document.getElementById('stateResults');
    var header = stateDataTable.children[0];
    var body = stateDataTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var politician1Name = body.children[0].children[0];
    var politician2Name = body.children[1].children[0];
    var politician1Results = body.children[0].children[1];
    var politician2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    politician1Name.innerText = john.name;
    politician2Name.innerText = jane.name;
    politician1Results.innerText = john.electionResults[state];
    politician2Results.innerText = jane.electionResults[state];

    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
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

// Adding data to the HTML country result table that is in the header
var countryDataTable = document.getElementById('countryResults');
var row = countryDataTable.children[0].children[0];

row.children[0].innerText = john.name;
row.children[1].innerText = john.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;