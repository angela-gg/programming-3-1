var grassArr = [];
var grassEaterArr = [];
var grassEaterEaterArr = [];

var side = 12;
var matrix = [];
function setup() {
    var row = 70, column = 70;

    for (var y = 0; y < row; ++y) {
        matrix[y] = [];

    for (var x = 0; x < column; ++x) {
        matrix[y][x] = random([0,1,2,3]);
    }
}
    frameRate(500);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i, 1);
                grassArr.push(gr);
            }else if(matrix[i][j] === 2){
                const eaters = new GrassEater(j,i,1);
                grassEaterArr.push(eaters);
            }else if(matrix[i][j] === 3){
                const eaterseater = new GrassEaterEater(j,i,1)
                grassEaterEaterArr.push(eaterseater);
            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] === 1) {
                fill("green");
            }else if (matrix[y][x] === 2) {
                fill("yellow");
            }else if(matrix[y][x] === 3){
                fill("red");
            }else{
                fill("grey");
            }

            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }
    for(var i in grassEaterEaterArr) {
        grassEaterEaterArr[i].mul();
        grassEaterEaterArr[i].eat();
        grassEaterEaterArr[i].die();
    }
}
