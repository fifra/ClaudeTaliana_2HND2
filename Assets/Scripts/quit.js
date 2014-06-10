#pragma strict

function Start () {

}


// quit game if Q button is pressed
function Update () {
	if(Input.GetKey(KeyCode.Q)){
		Application.LoadLevel("Main"); //quit the game
	}
}