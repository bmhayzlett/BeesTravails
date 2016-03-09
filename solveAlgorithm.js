var travelingSalesman = function (startingPoint, endingPoint, pointArray) {
// startingPoint: [400,250]
// endingPoint: [400,250]
// pointArray: [[500,500], [25,300]]
// tour: 543
  debugger;
  if (pointArray.length === 1) {
    var tour = hypotenuse(startingPoint,pointArray[0]) +
      hypotenuse(pointArray[0],endingPoint);
    var pointArray=[startingPoint, pointArray[0], endingPoint];
    debugger;
    return {tourLength: tour, tourArray: pointArray};
  };

  shortestTour = null;

  pointArray.forEach(function(point, index) {
    debugger;
    copyArray = pointArray.slice();
    newStart = copyArray.splice(index,1)[0];
    var tour = travelingSalesman(newStart,endingPoint,copyArray)
    if (shortestTour === null || shortestTour.tourLength > tour.tourLength) {
      shortestTour = tour;
    };
  });
  debugger;
  return shortestTour;
};

var hypotenuse = function (point1, point2) {
  return Math.sqrt(Math.pow(point1[0] - point2[0],2) +
    Math.pow(point1[1] - point2[1],2));
};

Window.travelingSalesman = travelingSalesman;
