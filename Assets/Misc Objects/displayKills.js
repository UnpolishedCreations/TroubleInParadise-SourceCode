#pragma strict

/*function OnGUI(){
    GUI.Label(Rect(0,0,Screen.width,Screen.height),"Enemies Killed: " + killCount.kills);
}*/
function Update() {
    GetComponent(TextMesh).text = "" + killCount.kills;
}