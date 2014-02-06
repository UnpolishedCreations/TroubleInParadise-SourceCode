var object : GameObject;

function Update () {
	if(object.transform.position.y < -10) {
		Destroy(object);
	}
}