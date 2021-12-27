function log(message) {
    console.log(message);
}
var message = "Hello World";

log(message);


// ===========================================================================================
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
// ====================================================================
var a;
a = 1;
a = true;
a = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var message;
message = 'abc';
var endsWithC = message.endsWithC('c');
var alternativeWay = message.endsWithC('c');
var log = function (message) {
    console.log(message);
};
var doLog = function () { return console.log(); };
console.log('X: ' + this.x + ', Y: ' + this.y);
getDistance(another, Point);
{
    // ...
}
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
console.log('X: ' + this.x + ', Y: ' + this.y);
getDistance(another, Point);
{
    // ...
}
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
