console.log('hello world!');
var car = [1, 2, 3];
car.x = 20;
car.y = 29;


function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.log = function(){
    console.log(this.firstName);
}
var p1 = new Person('ariel', 'kitov');
var p2 = new Person('dani', 'kitov');

p1.log();
p2.log();

console.log(typeof(car));