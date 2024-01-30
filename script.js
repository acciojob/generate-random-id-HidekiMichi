function getRandom(min,max) {
	return Math.floor(Math.random()*(max-min))+min;
}
function generateNumber(){
	return getRandom(0,9);
}
function generateLowerCase() {
	return String.fromCharCode(getRandom(65,91));
}
function generateUpperCase() {
	return String.fromCharCode(getRandom(97,123));
}

function makeid(l) {
  // write your code here
	let arrFunc=[];
	arrFunc.push(generateNumber);
	arrFunc.push(generateUpperCase);
	arrFunc.push(generateLowerCase);

	let str="";
	for(let i=1;i<=l;i++){
		let randIdx=getRandom(0,arrFunc.length);
		str+=arrFunc[randIdx]();
	}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
