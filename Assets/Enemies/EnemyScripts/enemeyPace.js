

var pointB : Vector3;
var paceDistance;
var vertDirection = 0;
var horzDirection = 5;
var movementSpeed = 1;
 
function Start () {
	var pointA = transform.position;
	pointB.y = pointA.y + vertDirection;
	pointB.x = pointA.x + horzDirection;
	
	while (true) {
		yield MoveObject(transform, pointA, pointB, 3.0);
		yield MoveObject(transform, pointB, pointA, 3.0);
	}
}
	 
function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
	var i = 0.0;
	var rate = 1.0/time;
	while (i < 1.0) {
		i += Time.deltaTime * rate * movementSpeed;
		thisTransform.position = Vector3.Lerp(startPos, endPos, i);
		yield;
	}
}
