function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(9,34,21);

	// modifies the thickness of the border of an object
	strokeWeight(5);


	rect(10,55,100,50);
	rect(100,100,100,50);


	fill(50,255,20);    
	stroke(255,255,255);
	strokeWeight(10);

	rect(150,10,100,55);
	rect(350,300,100,55,10,10);	

}
