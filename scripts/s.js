
var t = 0;
var reset_phasor_b = 0
var reset_phasor_1 = 0
var reset_phasor_2 = 0
var beats_1 = []
var beats_2 = []
var fact = 1
var factor_1 = 3
var factor_2 = 4
var pi = Math.PI
var loop = false
// The statements in the setup() function 
// execute once when the program begins
function setup() {
  createCanvas(800, 300);  // Size must be the first statement
  background(255)
  strokeWeight(2);
  stroke(0);     // Set line drawing color to white
  frameRate(60);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() {   // Set the background to black
  background(255)
  fill(255);
  center = {x:150, y:150}
  t += 0.01
  radius = 75
  angle = t%(2*pi)
  
  
  if (fact*t%(2*pi) < 0.2){
  
	reset_phasor_b = 1
	reset_phasor_1 = 0
	reset_phasor_2 = 0
	if (true) {
		beats_1 = []
		beats_2 = []
	}
  }
  
  if (fact*factor_1*t%(2*pi) < 0.2){
	point = {x : center.x + radius * cos(fact * angle), y :center.y - radius * sin(fact * angle)}
	reset_phasor_1 = 1
	beats_1.push(point)
	color_1 = true
  }else{
	color_1 = false
  }
  
  if (fact*factor_2*t%(2*pi) < 0.2){
	point = {x : center.x + radius * cos(fact * angle), y :center.y - radius * sin(fact * angle)}
	reset_phasor_2 = 1
	beats_2.push(point)
    color_2 = true
    }else{
	  color_2 = false
  }
  

  strokeWeight(4)
  stroke(0)
	// Bar phasor
  ellipse(center.x, center.y, radius * 2, radius * 2);
  ellipse(center.x + radius * cos(fact * angle), center.y - radius * sin(fact * angle), 20, 20);
  fill(125,125,125);
  strokeWeight(0)
  arc(center.x, center.y, 50, 50, -fact * angle, 2*PI);
  strokeWeight(2)
  line(center.x, center.y, center.x + radius * cos(fact * angle), center.y - radius * sin(fact * angle));
  line(center.x, center.y, center.x + radius, center.y);
  fill(255);
  	// Bar 1
	if (color_1){
		stroke(255,0,0)
	}else{
		stroke(0)
	}
  strokeWeight(4)
  ellipse(center.x+225, center.y, radius * 2, radius * 2);
  ellipse(center.x+225 + radius * cos(factor_1 *fact * angle), center.y - radius * sin(factor_1 *fact * angle), 20, 20);
  fill(255,125,125);
  strokeWeight(0)
  arc(center.x+225, center.y, 50, 50, -factor_1 * fact * angle, 2*PI);
  strokeWeight(2)
  line(center.x+225, center.y, center.x +225 + radius * cos(factor_1 * fact * angle), center.y - radius * sin(factor_1 * fact * angle));
  line(center.x+225, center.y, center.x + radius +225, center.y);
  fill(255);
  
    // Bar 2
	if (color_2){
		stroke(0,0,255)
	}else{
		stroke(0)
	}
  strokeWeight(4)
  ellipse(center.x+450, center.y, radius * 2, radius * 2);
  ellipse(center.x+450 + radius * cos(factor_2 *fact * angle), center.y - radius * sin(factor_2 *fact * angle), 20, 20);
  fill(125,125,255);
  strokeWeight(0)
  arc(center.x+450, center.y, 50, 50, -factor_2 * fact * angle, 2*PI);
  strokeWeight(2)
  line(center.x+450, center.y, center.x +450 + radius * cos(factor_2 * fact * angle), center.y - radius * sin(factor_2 * fact * angle));
  line(center.x+450, center.y, center.x + radius +450, center.y);

  	beats_1.forEach(function(p) {
	  fill(255,0,0);
	  stroke(255,0,0)
	  ellipse(p.x, p.y, 15, 15);
	});
	
	beats_2.forEach(function(p) {
	  fill(0,0,255);
	  stroke(0,0,255)
	  ellipse(p.x, p.y, 15, 15);
	});
  
} 