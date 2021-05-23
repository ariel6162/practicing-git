function Calculator (a,b)
{
    this.a = a;
    this.b = b;
}


Calculator.prototype.add = function () {
    return this.a + this.b;
}
Calculator.prototype.subtract = function () {
    return this.a - this.b;
}
Calculator.prototype.multiply = function () {
    return this.a * this.b;
}
Calculator.prototype.log = function () {
    console.log(' The sum is ' + this.add() );
    console.log(' The difference is ' + this.subtract() );
    console.log(' The product is ' + this.multiply() );
}

var p1 = new Calculator(5,10);
var p2 = new Calculator(8,20);

p1.log();
p2.log();

