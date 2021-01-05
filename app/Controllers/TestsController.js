import { ProxyState } from "../AppState.js";
import { testsService } from "../Services/TestsService.js";
import { randomInt } from "../Utils/GenerateNumber.js";
// import Swal from "sweetalert2"

function _drawTest() {
  let template = ""
  ProxyState.tests.forEach(t => template += t.Template)
  document.getElementById("testsHere").innerHTML = template
}

// function _drawReplay() {
//   Swal.fire('SweetAlert', 'text body')
// }

export default class TestsController {
  constructor() {
    testsService.getTest()
    console.log(randomInt())
    ProxyState.on("tests", _drawTest)
    // _drawReplay()
  }

  checkAnswer(id, answer, find) {
    testsService.checkAnswer(id, answer, find)
  }

}

