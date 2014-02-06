
var rainPrefab : GameObject;
var firePrefab : GameObject;
var number : int;
var number2 :int;

function Start () {
	yield rain();
}

function Update () {
	
}

function rain() {
	while(true) {
		number = Random.Range(1,10);
		number2= Random.Range(1,3);
		
		if(number >= 7 ) {
			if(killCount.kills >= 10) {
				Instantiate(firePrefab, transform.position, transform.rotation);
			}
			else {
				Instantiate(rainPrefab, transform.position, transform.rotation);
			}
		}
		yield WaitForSeconds (number2);
		
	}
	
}