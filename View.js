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
            value: './topics/nighthawk_flashcard_data.txt',
          },
          { name: 'Выдры', value: './topics/otter_flashcard_data.txt' },
          { name: 'Еноты', value: './topics/raccoon_flashcard_data.txt' },
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
