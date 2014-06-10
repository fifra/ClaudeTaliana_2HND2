#pragma strict

static var score:int=0;
static var lives:int=10;

var fish : int;
var shield : boolean;

var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) {
		
		//adds a point when a small fish is collected 
		if(other.tag == "smallfish")
		{
			fish++;
		}
		
		//+1
		if(other.tag == "smallfish")
		{
		Destroy(other.gameObject);
		score=score+1;
		}
				
		if (fish==5)
		{
			shield = true;
			GameObject.FindGameObjectWithTag("shield").transform.position.z = transform.position.z;
			fish++;
		}
		
		
		if((other.tag == "enemy") && (shield == true)){
			
			shield =false;
			GameObject.FindGameObjectWithTag("shield").transform.position.z = -10;
			lives++;
			score++;
		}
		
		//when shield will be destroyed
		if((other.tag == "enemy") && (shield == false)){
		Destroy(other.gameObject);
		lives=lives-1;
		
		}
		
	}

//if lives is equal to 0, the level will restart
function checklives() {
	if (lives<=0) {
	Application.LoadLevel("L2");
	}
}

//if score is greater or equla to 20, level 3 will be loaded
function checkscore() {
	if (score==20) {
	Application.LoadLevel("L3");
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