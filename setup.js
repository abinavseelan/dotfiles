const { MultiSelect } = require('enquirer');

const runner = require('./setupOptions');

const prompt = new MultiSelect({
  name: 'taskList',
  message: 'What needs to be set up?',
  choices: [
    { name: 'brew' },
    { name: 'gitconfig' },
    { name: 'zsh' },
    { name: 'VSCode Extensions' },
    { name: 'Fira Code' },
  ],
});

(async () => {
  try {
    const answers = await prompt.run();
    answers.forEach((answer) => {
      runner(answer);
    });
  } catch (err) {
    console.error(err);
  }
})();
