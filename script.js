// Get the element on the page with the id canvas

let input, button, greeting;
let sel;
let dropdown;
var month = document.getElementById('month').value;
/*var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var month = document.getElementById('month');
var day = document.getElementById('day');*/

function setup() {
  // create canvas
 /* createCanvas(550, 500);
  background(200);*/

  input = createInput();
  input.position(30, 65);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(30, 5);

  textAlign(CENTER);
  textSize(50);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  
  //button.mousePressed(remove);

}

function greet() {
  const name = input.value();
  greeting.html(name +'s Astrology' + '!');
  input.value(''); 
}
document.getElementById('month').addEventListener('change', function () {
    var style = this.value == 1 ? 'block' : 'none';
    document.getElementById('aquarius').style.display = style;

     var style = this.value == 2 ? 'block' : 'none';
    document.getElementById('pisces').style.display = style;

     var style = this.value == 3 ? 'block' : 'none';
    document.getElementById('aries').style.display = style;

     var style = this.value == 4 ? 'block' : 'none';
    document.getElementById('taurus').style.display = style;

     var style = this.value == 5 ? 'block' : 'none';
    document.getElementById('gemini').style.display = style;

     var style = this.value == 6 ? 'block' : 'none';
    document.getElementById('cancer').style.display = style;

     var style = this.value == 7 ? 'block' : 'none';
    document.getElementById('leo').style.display = style;

     var style = this.value == 8 ? 'block' : 'none';
    document.getElementById('virgo').style.display = style;

     var style = this.value == 9 ? 'block' : 'none';
    document.getElementById('libra').style.display = style;

     var style = this.value == 10 ? 'block' : 'none';
    document.getElementById('scorpio').style.display = style;

     var style = this.value == 11 ? 'block' : 'none';
    document.getElementById('sagittarius').style.display = style;

     var style = this.value == 12 ? 'block' : 'none';
    document.getElementById('capricorn').style.display = style;
});
;
/*function newSelection() {
  console.log(sel.value()); 
}*/
// when submit clicked// 
    /*function click () { 
    remove(); 
}
 function select() {
  if (val === 'january') {
    document.getElementById("output").innerHTML = "scorpio":
  }
*/
