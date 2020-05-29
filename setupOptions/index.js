const { execSync } = require('child_process');

const extensionList = require('./editor/extensions.json');

const setupBrew = () => {
  console.log('📣 Setting up brew');
  execSync(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`, {
    stdio: 'inherit',
  });
  console.log('✅ brew set up!');
};

const copyGitconfig = () => {
  console.log('📣 Copying gitconfig');
  execSync(`touch ~/.gitconfig && cat ./setupOptions/git/.gitconfig > ~/.gitconfig`, {
    cwd: process.cwd(),
    stdio: 'inherit',
  });
  console.log('✅ gitconfig copied!');
};

const setupZsh = () => {
  console.log('📣 Installing ohmyzsh');
  execSync(`curl -Lo install.sh https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh `, {
    stdio: 'inherit',
  });
  execSync(`chmod 755 install.sh`, {
    stdio: 'inherit',
  });
  execSync(`./install.sh`);
  execSync(`rm ./install.sh`, {
    stdio: 'inherit',
  });
  console.log('✅ ohmyzsh installed!');

  console.log('📣 Installing ohmyzsh plugins');
  execSync(
    'git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting',
    {
      stdio: 'inherit',
    }
  );
  execSync('npm install -g pure-prompt', {
    stdio: 'inherit',
  });
  console.log('✅ plugins installed!');

  console.log('📣 Copying .zshrc');
  execSync(`touch ~/.zshrc && cat ./setupOptions/terminal/.zshrc > ~/.zshrc`, {
    stdio: 'inherit',
  });
  console.log('✅ .zshrc copied!');
};

const setupVSCodeExtensions = () => {
  try {
    execSync(`which code`, {
      stdio: 'inherit',
    });
  } catch (err) {
    console.log('\n\nCommand `code` not found. Have you installed VSCode and enabled the CLI command?');
    throw err;
  }

  console.log('📣 Installing VSCode extensions');

  extensionList.forEach((extension) => {
    console.log(`\n🤖 Installing ${extension.name}`);
    execSync(`code --install-extension ${extension.appId}`, {
      stdio: 'inherit',
    });
  });

  console.log('✅ VSCode extensions setup!');
  console.log(`\n\n👨‍💻Copy over the contents of './setupOptions/editor/settings.json' to the VSCode settings.json`);
};

const installFiraCode = () => {
  try {
    execSync(`which brew`, {
      stdio: 'inherit',
    });
  } catch (err) {
    console.log('\n\nCommand `brew` not found. Have you installed Homebrew?');
    throw err;
  }

  console.log('📣 Installing Fira Code');

  execSync(`brew tap homebrew/cask-fonts`, {
    stdio: 'inherit',
  });

  execSync(`brew cask install font-fira-code`, {
    stdio: 'inherit',
  });

  console.log('✅ FiraCode installed!');
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

      case 'VSCode Extensions': {
        setupVSCodeExtensions();
        break;
      }

      case 'Fira Code': {
        installFiraCode();
        break;
      }
    }
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = runner;
