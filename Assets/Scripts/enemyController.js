#pragma strict

var laserenemy:Rigidbody;

function shootLaser()
{
	//shoot the laser
	Instantiate(laserenemy,transform.position,transform.rotation);

}

 

function Start () {
	//ufos will shoot half a second after they spawn and every second after
	InvokeRepeating("shootLaser",0.5,0.5);
	

}

function Update () {
	
	
}