var travelingSalesman = function (startingPoint, endingPoint, pointArray) {

  if (pointArray.length === 1) {
    var tour = hypotenuse(startingPoint,pointArray[0]) +
      hypotenuse(pointArray[0],endingPoint);
    var pointArray=[startingPoint, pointArray[0], endingPoint];
    return {tourLength: tour, tourArray: pointArray};
  };

  var shortestTour = null;

  pointArray.forEach(function(point, index) {
    copyArray = pointArray.slice();
    newStart = copyArray.splice(index,1)[0];
    var subTour = travelingSalesman(newStart,endingPoint,copyArray)

    var tour = {}
    tour.tourLength = hypotenuse(startingPoint,subTour.tourArray[0]) + subTour.tourLength;
    tour.tourArray = [startingPoint].concat(subTour.tourArray)

    if (shortestTour === null || shortestTour.tourLength > tour.tourLength) {
      shortestTour = tour;
    };

  });
  return shortestTour;
};

var hypotenuse = function (point1, point2) {
  return Math.sqrt(Math.pow(point1[0] - point2[0],2) +
    Math.pow(point1[1] - point2[1],2));
};

var multiHypotenuse = function (array) {
  var totalHypotenuse = 0;
  for (var i = 0; i < array.length -1 ; i++) {
    totalHypotenuse += hypotenuse(array[i],array[i+1])
  };
  return totalHypotenuse;
};


//
