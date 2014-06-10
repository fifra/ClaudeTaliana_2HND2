#pragma strict

function Start () {

}


// quit game if Q button is pressed
function Update () {
	if(Input.GetKey(KeyCode.Escape)){
		Application.LoadLevel("Main"); //quit the game
	}
}
