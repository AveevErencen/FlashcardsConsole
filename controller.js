const View = require('./View');
const Model = require('./Model');

class Controller {
  async zapusk() {
    const obj = await View.start();
    const path = obj.topics;
    const arrQuestionAnswer = await Model.createArr(path);
    const result = await View.test(arrQuestionAnswer);
    console.log(result);
  }
}
const controllerQuiz = new Controller();
controllerQuiz.zapusk();

module.exports = Controller;
