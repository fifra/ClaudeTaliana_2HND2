#pragma strict

var cube:Rigidbody;

//creates an instance of cube at a random position in x and y
function createCube()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(14,15);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(2,4);
 
 //create a life relative to the game object
 Instantiate(cube,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 5.0 seconds
 //parameter 2: every 5.0 seconds
 InvokeRepeating("createCube",5.0,5.0);
}

function Update () {

}

//destroy the object when the object had left the screen
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}