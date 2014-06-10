#pragma strict
//controls the speed of the enemy laser
var speedOfLaser:int;

function Start () {

}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		//decrease lives by 1
		PlayerCont1.lives--;
		PlayerCont2.lives--;
		PlayerCont3.lives--;
		
		//remove the enemy laser from the scene
		Destroy(this.gameObject);
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);

}

function Update () {
	//enemy laser moves left
	transform.Translate(Vector3.left * speedOfLaser * Time.deltaTime);
}