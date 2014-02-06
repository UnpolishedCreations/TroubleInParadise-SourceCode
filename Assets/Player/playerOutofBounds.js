#pragma strict
var spawnpoint : GameObject;


function Update() {
    if(this.transform.position.y < -5) {
        this.transform.position = spawnpoint.transform.position;   
    }
}
