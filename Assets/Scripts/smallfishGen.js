#pragma strict
//This script will generate powerup in a random position

var powerup:Rigidbody;


//creates an instance of enemy at 
//a random position in x and y
function createsmallfish()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(12,17);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(-4,4);
 
 //create an enemy relative to the game object
 Instantiate(powerup,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 2 seconds
 //parameter 2: every 3 seconds
 InvokeRepeating("createsmallfish",2.0,3.0);
}

function Update () {

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}