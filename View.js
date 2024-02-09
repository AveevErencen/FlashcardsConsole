const inquirer = require('inquirer');

class View {
  static start() {
    return inquirer.prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' },
      {
        type: 'list',
        name: 'topics',
        message: 'Выбери тему теста?',
        choices: [
          {
            name: 'Ночные ястребы',
            value: './topics/nighthawk_flashcard_data',
          },
          { name: 'Выдры', value: './topics/otter_flashcard_data' },
          { name: 'Еноты', value: './topics/raccoon_flashcard_data' },
        ],
      },
    ]);
  }

  static async test(arr) {
    let count = 0;
    const questions = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      questions[i] = {
        type: 'input',
        name: `question${i + 1}`,
        message: `${arr[i].question}`,
      };
      await inquirer.prompt(questions[i]).then((answer) => {
        if (
          answer[`question${i + 1}`].toLowerCase() ===
          arr[i].answer.toLowerCase()
        ) {
          count += 1;
          console.log('🩷');
        } else {
          console.log('💔');
        }
      });
    }
    console.log(`Вы ответили правильно на ${count} из ${arr.length}`);
  }
}

module.exports = View;

// const arr1 = [
//   {
//     question: 'Что является основным источником пищи для ночных ястребов?',
//     answer: 'насекомые',
//   },
//   {
//     question: 'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
//     answer: 'нет',
//   },
//   {
//     question: 'Верно или нет?   Ночные ястребы вьют гнезда.',
//     answer: 'нет',
//   },
//   {
//     question: 'Где обыкновенные Ночные Ястребы проводят зиму?',
//     answer: 'Южная Америка',
//   },
//   {
//     question:
//       'Верно или нет?  Бульбат - другое название обыкновенного ночного ястреба.',
//     answer: 'верно',
//   },
// ];

// async function run(arr) {
//   const obj = await View.start();
//   const path = obj.topics;
//   const answersUser = await View.test(arr);
// }
// run(arr1);
