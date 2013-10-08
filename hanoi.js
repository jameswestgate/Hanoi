
var tmp;

onmessage = function (e) {
	var n = e.data;
	moveTower(n, "A", "C", "B");
};

function moveTower( n, fromPeg, toPeg, extraPeg ) { 
	// if there's only one disk to move, then just print the move required
	 if ( n==1 ) {
	 	postMessage( "Move disk from Peg " + fromPeg + " to " + toPeg);
	 	return;
	 }
	 // otherwise, then call the function to move n-1 disks out of the way... 
	 moveTower( n-1, fromPeg, extraPeg, toPeg ); 
	
	 // then move 1 disk to the destination 
	 moveTower( 1, fromPeg, toPeg, extraPeg ); 
	
	 // and the n-1 that were out of the way should be brought back 
	 moveTower( n-1, extraPeg, toPeg, fromPeg ); 
}