/**
 * "On Being Memorious" == Recall an abstract space from your memory and recreate it using only programmed primitives, colors, and lights.
 *	Using the GeometryHelper class and example project, create a menu script that generates a static 3d scene without any hand editing/
 *	Due Tuesday, January 31st. Done Individually.
 *
 */
@MenuItem ("Assignment1/Steve Klise - Middle Ground")
static function BuildMemory() {
	//Fill this out
	var mg : GameObject;
	
	var floor = GeometryHelper.CreateHorizontalPlane(Vector3(0, 0, 0), 200, 300);
  
	GeometryHelper.ApplyColor(floor, Color(0.5,0.25,0.24));
	
  // Sunlight
  GeometryHelper.CreateDirectionalLight(Vector3(500, 100, 0), Vector3(-2,-1,0), 1, Color.yellow);
  
	// Instantiate Camera
	// Move the camera to the couch.
	Camera.main.transform.position = Vector3(10, 10, 0);
	Camera.main.transform.LookAt(Vector3(0, 0, -50));
}
