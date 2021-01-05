import { ProxyState } from "../AppState.js"
import Test from "../Models/Test.js"
import { api } from "./AxiosService.js"


class TestsService {
  checkAnswer(id, answer, find) {
    let question = ProxyState.tests.findIndex(t => t.id == id)
    if (ProxyState.tests[question].correct == answer) {
      document.getElementById(id).classList.remove("bg-secondary")
      document.getElementById(id).classList.add("bg-success")
    } else {
      document.getElementById(id).classList.remove("bg-secondary")
      document.getElementById(id).classList.add("bg-danger")
    }
    document.getElementById(find).classList.add("text-light")
    for (let i = 0; i < 4; i++) {
      document.getElementById(`${id + "ans" + i}`).disabled = true
      ProxyState.answered++
    }
  }

  async getTest() {
    let res = await api.get()
    ProxyState.tests = res.data.results.map(t => new Test(t))
  }

}

export const testsService = new TestsService()