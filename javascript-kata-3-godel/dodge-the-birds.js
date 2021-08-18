// jump heights
const height = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
};

// Parameter hero has two method properties:
// findBirds() - Returns an array of birds that are on screen with x & y coordinates and horizontal speed
// jump(height) - Tells the hero to jump. Three jump heights available (1 - LOW, 2 - MEDIUM, 3 - HIGH)
function controller(hero) {
  const birdsCoords = hero.findBirds();
  if (!birdsCoords[0] || birdsCoords[0].x > 35) return;
  let yCoords = [];

  if (birdsCoords.length === 1) {
    if (birdsCoords[0].y <= 40) {
      hero.jump(1);
    }
  } else {
    for (let i = 0; i < birdsCoords.length; i++) {
      yCoords.push(birdsCoords[i].y);
    }

    let minCoordY = Math.min(yCoords);
    let maxCoordY = Math.max(yCoords);

    if (minCoordY >= 40) {
      hero.jump(3);
    }
  }
}
