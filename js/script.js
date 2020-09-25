var createPolitician = function(name) {
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;

    return politician;
}

var john = createPolitician("John");
var jane = createPolitician("Jane");
