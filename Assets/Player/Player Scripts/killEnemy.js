#pragma strict
var spawnpoint : GameObject;


function OnTriggerEnter( hitEnemy : Collider) {
/*	if( hitEnemy.tag == "enemyHead" ) {
		Debug.Log("Hit Enemy");
		killCount.kills++;
		Destroy(enemy);
	}*/
	
	if( hitEnemy.tag == "enemy") {
        this.transform.position = spawnpoint.transform.position;
		Debug.Log("Hit by Enemy, Player dead");
	}
    
    if( hitEnemy.tag == "flowerSpikes" ) {
        this.transform.position = spawnpoint.transform.position;
        Debug.Log("Hit by Flower Spikes, Player dead");
    }
    
    if( hitEnemy.tag == "firerain" ) {
        this.transform.position = spawnpoint.transform.position;
        Debug.Log("Hit by Firerain, Player dead");
    }
}