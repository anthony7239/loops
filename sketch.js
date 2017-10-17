function setup() { 
	createCanvas(640, 360);
	background("#CE2000")
	rectMode(CENTER);

	var column = width/3;
	var row = height/3;
	for (var x = 0; x <= width; x += column) {
		

		for (var y = 0; y <= height; y += row) {
			fill("#FFAE4D")
			ellipse(x, y-30, 60)

			fill("white")
			rect(x, y, 60, 70)

			fill("gray")
			rect(x, y, 5, 70)

			fill("gray")
			rect(x, y, 60, 5)

			fill("#FFAE4D")
			rect(x, y+40, 65, 10)
		}
	}
}
