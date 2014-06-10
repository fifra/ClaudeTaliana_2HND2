#pragma strict
//declaring an integer variable
var cameraspeed:int;

function Start () {

}

function Update () {
	//this line is used to move the camera forward
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
}