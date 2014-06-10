#pragma strict
//This script will generate enemy in a random position

var enemy:Rigidbody;

function Start () {
 //parameter 1: wait 1.0 seconds
 //parameter 2: every 2.0 seconds
 InvokeRepeating("createEnemy",1.0,1.0);
}

//creates an instance of enemy at a random position in x and y
function createEnemy()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(8,13);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(-3,5);
 
 //create an enemy relative to the game object
 Instantiate(enemy,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Update () {

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}