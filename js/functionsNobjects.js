console.log("DIFFERENT FUNCTIONS");
// regular function, called explicitly by name
function multiply() {
    var result = 3 * 4;
    console.log(result);
}
multiply();

// anonymous function stored in a variable
// invoke by calling the variable as a function
var divided = function() {
    var result = 6/2;
    console.log(result, "is the result");
}
divided();

// immediately invoked function expression,
// runs as soon as the browser finds it
(function() {
    var result = 12 / 0.75;
    console.log("the result is ", result);
}())

/** Passing values */
var first = 5/7;
var second = 6/4;
function findBiggestFraction(a, b) {
    var result;
    a > b ? result = ["first", a] : result = ["sencond", b];
    return result;
}
var fractionResult = findBiggestFraction(first, second);
console.log(fractionResult);

/** Anonymous Function example */
// var a = 5/7;
// var b = 18/25;
var theBiggest = function(a, b) {
    var result;
    if(a > b) {
        result = ["a", a];
    } else {
        result = ["b", b];
    }
    return result;
}
console.log(theBiggest(8/9, 13/25));

/** Immediately Invoked Function example */
var first = 13/25;
var second = 8/9;
var theBiggest = (function(a, b) {
    var result;
    if(a > b) {
        result = ["a", a];
    } else {
        result = ["b", b];
    }
    return result;
})(first, second)
console.log(theBiggest);

/** Variable examples local(let) and global(var) */
const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope() {
    var localVar = 2;

    if (localVar) {
        let localVar = "I'm different";
        console.log("nested localVar ", localVar);
    }
    console.log("logScope localVar ", localVar);
}
logScope();


/** OBJECT example */
var course = new Object();
// course.title = "javascript essentail training";
// course.instructor = "raysray";
// course.level = 12;
// course.published = true;
var course = {
    title: "javascript essentail training",
    instructor: "raysray",
    level: 12,
    published: true,
    views: 0,
    updateViews: function() { 
        return course.views++;
    }
}
console.log(course.views);
course.updateViews();
console.log(course.views);

/** Object Constructor  */
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return this.views++;
    }
}
var courses = [
    new Course("course1", "ray", 1,true, 0),
    new Course("course2", "random", 2, false, 12)
]
/** DOT NOTATION */
courses[1].updateViews();
console.log(courses[1].views);
/** BRACKET NOTATION */
courses[1]["updateViews"];
console.log(courses[1]["views"]);

/** CLOSURES example */
/** - is a function inside of a function 
 *    that relies on variables in the outside function
 *    to work.
 */
function doSomeMath() {
    // start of closure
    var a = 5;
    var b = 4;
    
    function multiply() {
        var result = a * b;
        return result;
    }
    return multiply;
    // end of closure
}
var theResult = doSomeMath();
console.log("the result:", theResult);
console.log("the result:", theResult());

/** another CLOSURE example */
function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }
    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlSize = giveMeEms(32);

console.log("small size", smallSize());
console.log("medium size", mediumSize());
console.log("large size", largeSize());
console.log("xl size", xlSize());
