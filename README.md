[Bee's Travails](http://bmhayzlett.github.io/BeesTravails)

Welcome to Bee's Travails! The Traveling Salesman is a very famous computer science problem. This app demonstrates the 'brute force' solve method, which tests every single possible path. This algorithm has O(n!) time complexity, so each additional flower vastly increases the solve time. Be careful! If you select 10 flowers, you might wait a while while your computer performs more than 3.6 million calculations!

The figure below shows the two tests used to confirm the accuracy of the alogrithm.  

The Start to Finish Test tested a starting point, and ending point, and 3 intermediary
points. Point A is the starting point, and point E is the ending point. There are 6 paths between
the two points, and path A -> B -> C -> D -> E is the shortest path.  

The Octagon test was used to test whether the algorithm would travel around a
"circle", approximated by an octagon. In order to visit every point, the fastest
path will be to follow the octagon shape.

![alt tag](https://cloud.githubusercontent.com/assets/15318784/13804191/2979a30c-eb08-11e5-8b4d-992eb8225d5f.png)

Below is a screenshot showing the app's solution to a problem with 8 flowers.
![alt tag](https://cloud.githubusercontent.com/assets/15318784/13910782/88b8a6d0-eee4-11e5-8b8d-f7c38eab1a3e.png)

Ideas for improvement:
1. Dynamic programming, which will prune off search branches that exceed the current fastest route.
2. Greedy search, which will test closer points prior to testing farther points
3. Held-Karp Algorithm.
