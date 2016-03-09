(function() {
  if (typeof window.BeesTravails === "undefined") {
    var BeesTravails = window.BeesTravails = {};
  };

  var BeesTravails = window.BeesTravails;

  var Options = BeesTravails.Options = function () {
    this.$numFlowers=$('body').find('#flower-slider')
    this.$start=$('body').find('#start-button');
    this.$undo=$('body').find('#undo-button');
    this.$submit=$('body').find('#submit-button');
    this.$giveUp=$('body').find('#give-up-button');
    this.$undo=$('body').find('#instructions-button');
    this.bindClickHandlers();
  };

  Options.prototype.bindClickHandlers = function () {
    this.$start.click(this.startGame.bind(this))
    this.$undo.click(this.startGame.bind(this))
    this.$submit.click(this.startGame.bind(this))
    this.$giveUp.click(this.startGame.bind(this))
    this.$undo.click(this.startGame.bind(this))
  };

  Options.prototype.startGame = function () {
    numFlowers = parseInt(this.$numFlowers[0].value)
    new Game(numFlowers);
  };

})();

function Game (numFlowers) {
  this.canvas = document.getElementById('game-canvas');
  this.c = this.canvas.getContext('2d');
  this.c.clearRect(0,0,800,500);
  var gamePoints = [];
  gamePoints.push(addHive(this.c));
  gamePoints.concat(addFlowers(this.c, numFlowers));
  gamePoints.concat([400,250]);
  debugger;
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
        debugger;
        c.drawImage(this, this.xDim, this.yDim, 50, 50)
      };
    }(flower, this.xDim, this.yDim);
  }
  debugger;
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
