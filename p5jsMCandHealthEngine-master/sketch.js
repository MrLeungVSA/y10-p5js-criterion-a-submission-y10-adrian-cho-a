var question1;
var question2;
var question3;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;

var canvasID;
var locked;

var numberOfAnswers;

function preload()
{


	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 238;
	questionHeight = 66;

	questionX = [93.75,375,93.75,375];
	questionY = [900,900,1100,1100];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);

	question1[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question1[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question1[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question1[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');
 

	question2[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question2[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question2[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question2[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question3[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question3[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question3[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question3[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


}

function setup()
{
	createCanvas(750,1334);

	health = 5;
	canvasID = 0;
	locked = false;
}

function draw()
{
	background(0,0,0);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 0)
	{
		showQuestions(question1);
		isButtonClicked(0,1)
	}
	else if (canvasID == 1)
	{
		showQuestions(question2);
		isButtonClicked(0,2)
	}
	else if (canvasID == 2)
	{
		showQuestions(question3);
		isButtonClicked(1,0)
	}

	showHealth();
	fill(255,0,0)
	rect(0,200,750,600)
	fill(0,0,0)
	textSize(76)
	text("Monster goes here",60,500)

}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(0,30,health*150,50);
	fill(0,0,0);
	textSize(40)
	text(health,10,70)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 1;
		}
	}
}

// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",50,50);
	textSize(12);
}

// shows questions on the screen
function showQuestions(thequestion)
{
	for (var i = 0; i < numberOfAnswers; i++)
	{
		image(thequestion[i],questionX[i],questionY[i])
	}
}

// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;
}










