const fs = require('fs');

class Model {
  constructor(link) {
    this.link = link;
  }

  static createArr(link) {
    const resultArr = [];
    const text = fs.readFileSync(`${link}`, 'utf-8');

    text.split('\n\n').map((el) => {
      resultArr.push({
        question: el.split('\n')[0],
        answer: el.split('\n')[1],
      });
    }); return resultArr;
  }

  static async getResult(obj, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].answer === obj[`question${i + 1}`]) {
        counter += 1;
      }
    }

    console.log(`Вы ответили правильно на ${counter} из ${arr.length}`);
  }
}

// console.log(Model.createArr('./topics/nighthawk_flashcard_data.txt'));
// Model.getResult({
//   question1: 'насекомые',
//   question2: 'нет',
//   question3: 'нет',
//   question4: 'Южная Америка',
//   question5: 'верно',
// }, [
//   {
//     question: 'Что является основным источником пищи для ночных ястребов?',
//     answer: 'насекомые'
//   },
//   {
//     question: 'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
//     answer: 'нет'
//   },
//   {
//     question: 'Верно или нет?   Ночные ястребы вьют гнезда.',
//     answer: 'нет'
//   },
//   {
//     question: 'Где обыкновенные Ночные Ястребы проводят зиму?',
//     answer: 'Южная Америка'
//   },
//   {
//     question: 'Верно или нет?  Бульбат - другое название обыкновенного ночного ястреба.',
//     answer: 'верно'
//   }
// ]);
