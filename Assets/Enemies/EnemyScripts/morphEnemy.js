#pragma strict


function Update () {
	if(killCount.kills >= 3 && killCount.kills < 9) {
		renderer.enabled = false;
	}
	if(killCount.kills >= 9 && killCount.kills < 14) {
		renderer.enabled = false;
	}
	if(killCount.kills >= 14 && killCount.kills < 20) {
		renderer.enabled = false;
	}
	
	
}