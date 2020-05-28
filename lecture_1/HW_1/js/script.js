// data input 
alert("Welcome! Let's calculate the volume of the cylinder.");
radius = +prompt("Input r: ", ""); // первый метод
height = prompt("Input h: ", "");
height = parseInt(height); // второй метод

console.log(radius);
console.log(height);

// calculation
v = Math.PI * radius * radius * height;
s = v / height;

console.log(v);
console.log(s);

// lines
lineStar = "<p>**************</p>";
lineString = "<p>--------------------</p>";

// data output
document.write(lineStar);
document.write("Обьем цилиндра с площадью основы " + s + ", радиусом " + radius +  " и высотой " + height + " равен:");
document.write(lineString);
document.write("V = " + v);
document.write(lineString);
document.write("end.");