//Import your Controller into the index.js file, 
import QuakesController from "./controller.js";
//create an instance of the class (new QuakeController()), then call the init() method.
const quakesController = new QuakesController('#quakeList');
quakesController.init();