// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

var theBeatlesPlay = function (musiciansArray, instrumentsArray){
var array = [];
  for (var i=0; i < musiciansArray.length; i++){
    array.push(musiciansArray[i] + " " + "plays" + " " + instrumentsArray[i]);
  }
  return (array);
}

function johnLennonFacts(){
var facts= [
    "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
    facts.push = ("foo", "bar");
    var newfacts = [];
    var i = 0;
    while (i < facts.length){
      newfacts.push(facts[i] + "!!!"); i++;
    }
return newfacts;
}
