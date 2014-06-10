#pragma strict

static var score:int=0;
static var lives:int=10;

var fish : int;
var shield : boolean;

var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) {
		
		//adds a point whene a starfish is collected
		if(other.tag == "starfish")
		{
			fish++;
		}
		
		//+1
		if(other.tag == "starfish")
		{
		Destroy(other.gameObject);
		score=score+1;
		
		}
				
		//when 5 fish are collected, the shield will appear
		if (fish==5)
		{
			shield = true;
			GameObject.FindGameObjectWithTag("shield").transform.position.z = transform.position.z;
			fish++;
		}
		
		
		//shield will appear until the character hits an enemy
		if((other.tag == "enemy") && (shield == true)){
			
			shield =false;
			GameObject.FindGameObjectWithTag("shield").transform.position.z = -10;
			lives++;
			score++;
		}
		
		//when shield will be destoryed
		if((other.tag == "enemy") && (shield == false)){
		Destroy(other.gameObject);
		lives=lives-1;
		
		}
		
	}

function checklives() {
	if (lives<=0) {
	Application.LoadLevel("L1");
	}
}

function checkscore() {
	if (score>=15) {
	Application.LoadLevel("L2");
	}
}
	
//displaying the score and lives on screen
function OnGUI()
{
	GUI.skin = textStyle;
	//parameters: x, y, width, height
	GUI.Label(Rect(5,5,150,50),"Score: "+score);
	GUI.Label(Rect(160,5,150,50),"Lives: "+lives);
}

function Start () {
	lives=10;
	score=0;
	shield = false;
}

function Update () {
	checklives();
	checkscore();
}