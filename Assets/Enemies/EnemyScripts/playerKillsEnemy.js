#pragma strict
var enemy : GameObject;

function OnTriggerEnter( player : Collider) {
	if( player.tag == "Player" ) {
		killCount.kills++;
        Debug.Log("Hit Enemy, Kills: " + killCount.kills);
		Destroy(enemy);
	}
}