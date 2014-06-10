#pragma strict
//var controlling the character's speed
var characterSpeed:int;


function Start () {	
Screen.showCursor = false;
}


function Move (cSpeed:int) {
	
	transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"));

	if (Input.GetKey(KeyCode.UpArrow))
	{
		transform.Translate(Vector3.up * Time.deltaTime * cSpeed);
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		transform.Translate(Vector3.down * Time.deltaTime * cSpeed);
	}

}

function Update () {
	
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	//transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"));
	if (transform.position.y > 2.8){
		transform.position.y = 2.8;
	}
	if (transform.position.y < -4.5){
		transform.position.y = -4.5;
	}
}