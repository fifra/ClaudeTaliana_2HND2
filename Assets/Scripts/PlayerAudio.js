#pragma strict

function Start () {

}


function OnTriggerEnter (other: Collider) {
		
		//when the character collects one of the powerups, it will make a sound
		if(other.tag == "starfish")
		{
			if(!audio.isPlaying){
			audio.Play();
		}
		}
		
		if(other.tag == "smallfish")
		{
			if(!audio.isPlaying){
			audio.Play();
		}
		}
		
		if(other.tag == "coral")
		{
			if(!audio.isPlaying){
			audio.Play();
		}
		}
}