#pragma strict

function Start () {

}

function Update () {
	Debug.Log(transform.position.z);
}

function OnTriggerEnter(other:Collider) {
if (other.collider.gameObject.tag == "enemy")
{
	Destroy(other.collider.gameObject);
	Destroy(this.gameObject);
}
}