// Handle click event and pause animation
const circle = document.getElementById('animated-circle');
const triangle = document.getElementById('animated-triangle');
const square = document.getElementById('animated-square')

let isStoppedCircle = false;
let isStoppedTriangle = false;
let isStoppedSquare = false;

// Circle method
circle.addEventListener('click', function() {
    if (isStoppedCircle === false){
        circle.pauseAnimations();
        isStoppedCircle = true;
    }else {
        circle.unpauseAnimations();
        isStoppedCircle = false;
    }
});

// Triangle method
triangle.addEventListener('click', function() {
    if (isStoppedTriangle === false){
        triangle.pauseAnimations();
        isStoppedTriangle = true;
    }else {
        triangle.unpauseAnimations();
        isStoppedTriangle = false;
    }
});

// Square method
square.addEventListener('click', function() {
    if (isStoppedSquare === false){
        square.pauseAnimations();
        isStoppedSquare = true;
    }else {
        square.unpauseAnimations();
        isStoppedSquare = false;
    }
});