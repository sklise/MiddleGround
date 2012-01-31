/**
 * "On Being Memorious" == Recall an abstract space from your memory and recreate it using only programmed primitives, colors, and lights.
 *	Using the GeometryHelper class and example project, create a menu script that generates a static 3d scene without any hand editing/
 *	Due Tuesday, January 31st. Done Individually.
 *
 */

static function BuildFloor() : GameObject {
  var a = Vector3(0,-100,0);
  var roomWidth = Vector3(300, 0, 0);
  
  var backLeftCorner = a+roomWidth;
  
  var alcoveDepth = Vector3(0, 0, 200);
  
  var triangleDepth = Vector3(0,0,30);
  var triangleWidth = Vector3(40, 0, 0);
  
  var centerWidth = roomWidth - triangleWidth;
  var centerDepth = Vector3.Scale(alcoveDepth, new Vector3(0, 0, 0.8));
  var centerBackLeft = backLeftCorner+alcoveDepth-triangleWidth;
  var centerBackRight = a+alcoveDepth;
  // Make the floor out of a series of triangles... I guess.
  GeometryHelper.BeginPolys();
  GeometryHelper.AddPoly(
    a,
    a+alcoveDepth,
    backLeftCorner
  );
  GeometryHelper.AddPoly(
    backLeftCorner,
    a+alcoveDepth,
    backLeftCorner+alcoveDepth
  );
  GeometryHelper.AddPoly(
    backLeftCorner+alcoveDepth,
    backLeftCorner+alcoveDepth-triangleWidth,
    backLeftCorner+alcoveDepth-triangleWidth+triangleDepth
  );
  GeometryHelper.AddPoly(
    centerBackLeft,
    centerBackRight,
    centerBackRight+centerDepth
  );
  GeometryHelper.AddPoly(
    centerBackLeft,
    centerBackRight+centerDepth,
    centerBackLeft+centerDepth
  );
  var floor = GeometryHelper.EndPolys();
  
  GeometryHelper.ApplyColor(floor, Color(0.5,0.25,0.24));
}

static function BuildChair(center : Vector3, scale : float) : GameObject {
  // 4 rectangular solids.
  // Base
  // Sides
  // Back
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
}

static function BuildSofa() : GameObject {
  
}

static function Window(center : Vector3, width : float, height: float) : GameObject {
  
}

@MenuItem ("Assignment1/Steve Klise - Middle Ground")
static function BuildMemory() {
	//Fill this out
	var mg : GameObject;
  
  // BuildFloor();
  
  BuildChair( Vector3(0, 0, 0), 50);
  
  // Sunlight
  GeometryHelper.CreateDirectionalLight(Vector3(500, 100, 0), Vector3(-2,-1,0), 0.65, Color.yellow);
  
	// Instantiate Camera
	// Move the camera to the couch.
	Camera.main.transform.position = Vector3(200, 30, -33);
	Camera.main.transform.LookAt(Vector3(0, 0, -50));
}
