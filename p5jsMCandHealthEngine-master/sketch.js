var question1 ;
var question2;
var question3;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;
var corA;
var aquestionX;
var aquestionY;
var canvasID;
var locked;
var showHealthBar;

var numberOfAnswers;

function preload()

	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 238;
	questionHeight = 66;

	questionX = [93.75,375,93.75,375];
	questionY = [900,900,1100,1100];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);
	question4 = new Array(numberOfAnswers);
	question5 = new Array(numberOfAnswers);
	question6 = new Array(numberOfAnswers);
	question7 = new Array(numberOfAnswers);
	question8 = new Array(numberOfAnswers);
	question9 = new Array(numberOfAnswers);
	question10 = new Array(numberOfAnswers);

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


	question4[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question4[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question4[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question4[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question5[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question5[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question5[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question5[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question6[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question6[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question6[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question6[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question7[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question7[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question7[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question7[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question8[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question8[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question8[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question8[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question9[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question9[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question9[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question9[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


	question10[0] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-a.png');
	question10[1] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-b.png');
	question10[2] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-c.png');
	question10[3] = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Buttons/button_answer-d.png');


}

function setup()
{
	createCanvas(750,1334);

	setupTimer();
	showHealthBar = true;
	health = 5;
	canvasID = 0;
	locked = false;
	corA = false;
	aquestionX = 10
	aquestionY = 850
	img =loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-adrian-cho-a/master/Monster.png")
}

function draw()
{
	background(0,0,0);

	showHealth();


	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 0)
	{
		fill(0,0,255)
		rect(0,0,750,667)
		fill(0,0,0)
		text("Hiragana",750/2-120,667/2)
		textSize(50)

		if (mouseX > 0 && mouseY < 667 && mouseIsPressed)
		{

			canvasID = 101
		}


		fill(255,0,0)
		rect(0,667,750,667)
		fill(0,0,0)
		text("Katakana",750/2-120,1334/4*3)
		textSize(50)

		if (mouseX < 750 && mouseY > 667 && mouseIsPressed)
		{

			canvasID = 201
		}

	}

	// 101, 102, 103 is Hiragana
	else if (canvasID == 101)
	{
		showQuestions(question1);
		// change the first value for the correct answer
		// 0 - A, 1 - B, 2 - C, 3 - D
		isButtonClicked(0,1)
		fill(255,255,255);
		text("How is the character あ pronounced?",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 102)
	{
		showQuestions(question2);
		isButtonClicked(0,2)
		fill(255,255,255);
		text("question 2",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 103)
	{
		showQuestions(question3);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 3",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 104)
	{
		showQuestions(question4);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 4",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 105)
	{
		showQuestions(question5);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 5",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 106)
	{
		showQuestions(question6);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 6",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 107)
	{
		showQuestions(question7);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 7",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 108)
	{
		showQuestions(question8);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 8",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 109)
	{
		showQuestions(question9);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 9",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 110)
	{
		showQuestions(question10);
		isButtonClicked(1,0)
		fill(255,255,255);
		text("question 10",aquestionX,aquestionY);
		manageTime()
		showTimeBar(0,100)
		image(img,0,200)

	}
	else if (canvasID == 111)
	{
		showHealthBar = false
		youWin();
	}

}

// shows your health bar and check if you are dead or not
function showHealth()
{
	if (showHealthBar == true)
	{
		fill(0,255,0);
		rect(0,30,health*150,50);
		fill(0,0,0);
		textSize(40)
		text(health,10,70)


	}
	if (health <= 0)
	{
		canvasID = -1;
	}
}

function deductHealth(x)
{
	health = health - x;
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
					corA = true;
					canvasID++;
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
	textSize(50);
	fill(255,255,255);
	text("GAME OVER!",187.5,50);
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

function youWin()
{
	textSize(50);
	fill(255,255,255);
	text("YOU WON!", 187.5,50)
}









