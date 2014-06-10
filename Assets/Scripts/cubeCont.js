#pragma strict
function Start () {
}

function Update () {
}

function OnTriggerEnter(other:Collider)
{
	//if the player hits the square, the following will happen:
	if(other.tag == "Player"){
		
		//score=score+2;
		PlayerCont3.score+=1;//Level3
		//give green material
		renderer.material.color = Color.green;
		}

}

function OnTriggerExit(other:Collider)
{
	if(other.tag == "Player")
	{
	//give black material
	renderer.material.color = Color.black;
	}
}