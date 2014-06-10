#pragma strict

var isQuit = false;


//change text color to blue on mouse roll over
function OnMouseEnter(){
	guiText.material.color= Color.blue;
}

//change text color to white
function OnMouseExit(){
	guiText.material.color= Color.white;
}


function OnMouseUp(){
	if (isQuit==true){
		Application.Quit(); //quit the game
	}
	
	else {
		Application.LoadLevel("L1"); // load level 1
	}
}

function Start (){
	Screen.showCursor = true;
}

function Update () {
}