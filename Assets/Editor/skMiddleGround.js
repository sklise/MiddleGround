/**
 * "On Being Memorious" == Recall an abstract space from your memory and recreate it using only programmed primitives, colors, and lights.
 *	Using the GeometryHelper class and example project, create a menu script that generates a static 3d scene without any hand editing/
 *	Due Tuesday, January 31st. Done Individually.
 *
 */

static function BuildChair(center : Vector3, scale : float) : GameObject {
  var orange = Color(.819607843, .431372549, .090196078);
  var chair : GameObject;
  var sideWidth = scale * .2;
  var sideHeight = scale * .6;
  var centerWidth = scale;
  var centerHeight = scale * .4;
  var depth = scale * .8;

  var cushionTopPos = center;

  var chairCenter = GeometryHelper.CreateCube(cushionTopPos, Vector3(depth, 40, centerWidth));
  sideHeight = 40 + 15;
  var rightSidePos = cushionTopPos + Vector3(0, -(40 - sideHeight)/2, centerWidth/2 + 2);
  var rightSide = GeometryHelper.CreateCube(rightSidePos, Vector3(depth+4, sideHeight, 10));

  var leftSidePos = cushionTopPos + Vector3(0, -(40 - sideHeight)/2, -centerWidth/2 - 2);
  var leftSide = GeometryHelper.CreateCube(leftSidePos, Vector3(depth+4, sideHeight, 10));

  leftSide.name = "ChairLeft";
  rightSide.name = "ChairRight";

  rightSide.transform.Rotate(Vector3.right, 4);
  leftSide.transform.Rotate(-Vector3.right, 4);

  var backHeight = sideHeight * 1.65;
  var chairBackPos = cushionTopPos + Vector3( -depth/2, (backHeight-40)/2, 0);
  var chairBack = GeometryHelper.CreateCube(chairBackPos, Vector3(10, backHeight, centerWidth+10));

  chairBack.name = "ChairBack";
  chairBack.transform.Rotate(Vector3.forward, 12);
  
  GeometryHelper.ApplyColor(chairCenter, orange);
  GeometryHelper.ApplyColor(leftSide, orange);
  GeometryHelper.ApplyColor(rightSide, orange);
  GeometryHelper.ApplyColor(chairBack, orange);
}

static function BuildFloor() : GameObject {
  var brown = Color(.478431373, .290196078, .121568627);
  
  
}

static function BuildWalls(center : Vector3, scale: float) {
  var paint = Color(0.95, 0.95, 0.99);

  var wall : GameObject;

  var wallThickness = 8;
  // wall below window
  var wallPos = center - Vector3(0, -scale/2, 0);

  var lowerDim = Vector3(scale*3, scale, wallThickness);
  wall = GeometryHelper.CreateCube( wallPos, lowerDim);
  wall.transform.Rotate(Vector3(0, 1, 0), 23);
  GeometryHelper.ApplyColor(wall, paint);

  // wall side right
  var sideDim = Vector3(scale*0.4, scale*1.5, wallThickness);
  var wallSideRightPos = wallPos + Vector3(-scale*1.5 + sideDim.x/2, lowerDim.y/2+sideDim.y/2, 32.47668);
  wall = GeometryHelper.CreateCube( wallSideRightPos, sideDim);
  wall.transform.Rotate(Vector3(0, 1, 0), 23);
  GeometryHelper.ApplyColor(wall, paint);

  var wallSideLeftPos = wallPos + Vector3(scale*1.5 - sideDim.x/2, lowerDim.y/2+sideDim.y/2, -32.47668);
  wall = GeometryHelper.CreateCube( wallSideLeftPos, sideDim);
  wall.transform.Rotate(Vector3(0, 1, 0), 23);
  GeometryHelper.ApplyColor(wall, paint);

  var upperPos : Vector3 = wallPos + Vector3(0, sideDim.y+lowerDim.y, 0);
  wall = GeometryHelper.CreateCube( upperPos, lowerDim);
  wall.transform.Rotate(Vector3(0, 1, 0), 23);
  GeometryHelper.ApplyColor(wall, paint);
}

@MenuItem ("Assignment1/Steve Klise - Middle Ground")
static function BuildMemory() {
	//Fill this out
	var mg : GameObject;

  BuildChair( Vector3(0, 0, 0), 50);
  BuildWalls( Vector3(10, -25, -70), 60);

  // Sunlight
  GeometryHelper.CreateDirectionalLight(Vector3(200, 200, -100), Vector3(2,-10,10), 0.65, Color.yellow);

	// Instantiate Camera
	// Move the camera to the couch.
	Camera.main.transform.position = Vector3(137, 43, 20);
  // rotation 8, 284, 2.817
	Camera.main.transform.LookAt(Vector3(-15, 27, 100));
}
