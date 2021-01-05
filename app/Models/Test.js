import { generateId } from "../Utils/GenerateId.js"
import { randomInt } from "../Utils/GenerateNumber.js"


export default class Test {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.question = question
    this.correct = correct_answer
    this.incorrect = incorrect_answers
    this.id = generateId()
  }




  get Template() {
    return /*html*/`
    
    <div class="col-sm-12 col-md-4 d-flex justify-content-center">
    <div id="${this.id}" class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <h5 class="card-header">${this.question}</h5>
    <div class="card-body">
    ${this.Answers}
    </div>
    </div>
    </div>
    `
  }
  get Answers() {
    let ansArrs = this.incorrect
    ansArrs.splice(randomInt(), 0, `${this.correct}`,)

    let template = ""
    for (let i = 0; i < ansArrs.length; i++) {
      template += `<button id="${this.id + 'ans' + i}" class="btn ${this.id + "btn"}" onclick="app.testsController.checkAnswer('${this.id}', '${ansArrs[i]}', '${this.id + 'ans' + i}')"> ${ansArrs[i]} </button>`
    }
    return template
  }
}