//map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
//[6, 7, 2, 5, 3]

var array = ["ground", "control", "to", "major", "tom"];

function myMap(array, callback){

	var result = []


	for (index in array){
		var word = array[index]
		result.push(callback(word));
	}

	console.log(result);
}

function calculateLength(word){
	return word.length;
};

myMap(array, calculateLength);