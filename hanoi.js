

var tmp;

onmessage = function (e) {
	moveTower(1, 2, 3,e.data.n, e.data.n)
};

function moveTower(source, destination, swap, n, o) {
	if (n === 0) return;
	
	//Swap out tower
	tmp = source;
	source = destination;
	destination = tmp;

	//Move the tower
	moveTower(source, destination, swap, n-1, o);
	
	postMessage('Move from tower ' + source + ' to ' + destination);

	//Start next recursion
	o--;
	if (o > 0) moveTower(destination, swap, source, o , o);
}

