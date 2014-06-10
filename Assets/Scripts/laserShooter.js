#pragma strict
//reference to the weapon
var laserToShoot:Rigidbody;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.UpArrow))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}


}