
(function() {
  if (typeof window.BeesTravails === "undefined") {
    var BeesTravails = window.BeesTravails = {};
  };

  var BeesTravails = window.BeesTravails;

  var Options = BeesTravails.Options = function () {
    this.$numFlowers=$('body').find('#flower-slider');
    this.$start=$('body').find('#start-button');
    this.$giveUp=$('body').find('#give-up-button');
    this.$instructions=$('body').find('#instructions-button');
    this.bindClickHandlers();
  };

  Options.prototype.bindClickHandlers = function () {
    this.$start.click(this.startGame.bind(this));
    this.$giveUp.click(this.giveUp.bind(this));
    this.$instructions.click(this.showInstructions.bind(this));
  };

  Options.prototype.startGame = function () {
    numFlowers = parseInt(this.$numFlowers[0].value)
    this.gameSolution = new Game(numFlowers);

  };

  Options.prototype.giveUp = function () {
    new Solution(this.gameSolution.tourArray);
  };

  Options.prototype.showInstructions = function () {
    window.alert("Welcome to Bee's Travails! The Traveling Salesman is a very famous computer science problem. This app demonstrates the 'brute force' solve method, which tests every single possible path. This algorithm has O(n!) time complexity, so each additional flower vastly increases the solve time. Be careful! If you select 10 flowers, you might wait a while while your computer performs 3.6 million calculations!");
  }

})();


function Solution (travelArray) {
  var gameCanvas = document.getElementById('game-canvas').getContext('2d');
  this.canvas = document.getElementById('travel-canvas');
  this.c = this.canvas.getContext('2d');
  this.c.clearRect(0,0,800,500);
  var beeWidth = 247/7;
  var beeHeight = 202/7;
  var ctx = this.c;
  var position = 0;
  var speed = 10;
  var pathPoints = beePoints(travelArray);
  var bee = new Image();
  bee.src = './images/bee_burned.png';
  bee.onload = function () {
    animate()
  };

  function animate() {
    setTimeout(function() {
      animation = window.requestAnimationFrame(animate);
      position += speed;
      if (position > pathPoints.length - 1) {
        drawPath();
        return;
      }
      var pt = pathPoints[position];

      ctx.clearRect(0,0,800,500);
      ctx.save()
      ctx.beginPath();
      ctx.translate(pt[0],pt[1]);
      ctx.drawImage(bee,0,0,beeWidth,beeHeight);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
    }, 0.01 );
  };

  function beePoints(pathArray){
    var points = [];
    for (var i = 0; i < pathArray.length-1; i++) {
      var start = pathArray[i];
      var end = pathArray[i+1];
      var dx = end[0] - start[0];
      var dy = end[1] - start[1];
      var iterator = Math.floor(Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)));
      for (var j = 0; j < iterator; j++) {
        var x = start[0] + dx * j / iterator;
        var y = start[1] + dy * j / iterator;
        points.push([x,y])
      }
    }
    return points;
  };

  function drawPath () {
    for (var i = 0; i < travelArray.length-1; i++) {
      strokeLine(gameCanvas,travelArray[i][0]+25,travelArray[i][1]+25,
        travelArray[i+1][0]+25,travelArray[i+1][1]+25);
    }
<<<<<<< HEAD
=======
    window.cancelAnimationFrame(animation);
>>>>>>> gh-pages
  };

  function strokeLine(ctx,x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
  };

};


function Game (numFlowers) {
<<<<<<< HEAD
  if (typeof animation !== "undefined") {
    window.cancelAnimationFrame(animation);
  };
=======
>>>>>>> gh-pages
  this.canvas = document.getElementById('game-canvas');
  this.c = this.canvas.getContext('2d');
  this.c.clearRect(0,0,800,500);
  document.getElementById('travel-canvas').getContext('2d').clearRect(0,0,800,500);
  this.c.beginPath();
  var startingPoint = addHive(this.c);
  var gamePoints = addFlowers(this.c, numFlowers);
  return travelingSalesman(startingPoint,startingPoint,gamePoints);
};


function addFlowers(c, numFlowers) {
  var flowerImages = ["./images/flower1_burned.png",
                      "./images/flower2_burned.png",
                      "./images/flower3_burned.png",
                      "./images/flower4_burned.png",
                      "./images/flower5_burned.png"];
  var flowerLocations = [];

  for (var i = 0; i < numFlowers; i++) {
    var flower = new Image();
    flower.src = flowerImages[Math.floor(Math.random()*5)];

    flower.xDim = 400; flower.yDim = 250;
    while (flower.xDim < 426 && flower.xDim > 324 &&
          flower.yDim > 186 && flower.yDim < 364 ) {
      flower.xDim = Math.floor(Math.random()*750);
      flower.yDim = Math.floor(Math.random()*450);
    };
    flowerLocations.push([flower.xDim, flower.yDim])

    flower.onload = function (flower) {
      return function () {
        c.drawImage(this, this.xDim, this.yDim, 50, 50)
      };
    }(flower, this.xDim, this.yDim);
  }
  return flowerLocations;
};


function addHive (c) {
  var beehive = new Image();
  beehive.src = './images/beehive.png';
  width = 256/5
  height = 318/5
  beehive.onload = function () {
    c.drawImage(beehive, 400-(width/2), 250-(height/2), width, height);
  };
  return [400,250]
};
