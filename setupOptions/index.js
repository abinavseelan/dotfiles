const { execSync } = require('child_process');

const setupBrew = () => {
  console.log('🚧 Setting up brew');
  execSync(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`, {
    stdio: 'inherit',
  });
  console.log('✅ brew set up!');
};

const copyGitconfig = () => {
  console.log('🚧 Copying gitconfig');
  execSync(`touch ~/.gitconfig && cat ./setupOptions/git/.gitconfig > ~/.gitconfig`, {
    cwd: process.cwd(),
  });
  console.log('✅ gitconfig copied!');
};

const setupZsh = () => {
  console.log('🚧 Installing ohmyzsh');
  execSync(`sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`);
  console.log('✅ ohmyzsh installed!');

  console.log('🚧 Installing ohmyzsh plugins');
  execSync(
    'git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting'
  );
  console.log('✅ plugins installed!');

  console.log('🚧 Copying .zshrc');
  execSync(`touch ~/.zshrc && cat ./setupOptions/terminal/.zshrc > ~/.zshrc`);
  console.log('✅ .zshrc copied!');
};

const runner = async (entity) => {
  try {
    switch (entity) {
      case 'brew': {
        setupBrew();
        break;
      }
      case 'gitconfig': {
        copyGitconfig();
        break;
      }
      case 'zsh': {
        setupZsh();
        break;
      }
    }
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = runner;
