import TestsController from "./Controllers/TestsController.js";


class App {
  testsController = new TestsController()
}

window["app"] = new App();
