#pragma strict
var spikeFlowerPrefab : GameObject;
var enableSpikes = true;

function Update () {
	
    if(killCount.kills >= morphKills.morphKills1) {
		
        renderer.enabled = false;
		//collider.enabled = false;
        
        if(enableSpikes) {
            Instantiate(spikeFlowerPrefab, transform.position, transform.rotation);
            enableSpikes = false;
        }
	}
}
