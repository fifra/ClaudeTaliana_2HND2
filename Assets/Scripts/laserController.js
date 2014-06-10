#pragma strict
var laserSpeed:int;

function Start () {

}

//function that is triggered when thunder hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the thunder hits an enemy, we will do the following two things:
	//Destroy the laser
	//Destroy the enemy
	if(other.tag == "enemy"){
		Destroy(other.gameObject);
		//score=score+1;
		PlayerCont1.score++;
		
		
		//destroy the enemy
		Destroy(other.gameObject);
		//destroy the thunder
		Destroy(this.gameObject);
	}

}


function Update () {
	//move the thunder forward
	transform.Translate(Vector3.right *
		laserSpeed * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}