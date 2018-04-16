# Path to your oh-my-zsh installation.
export ZSH=/path/to/.oh-my-zsh

plugins=(git zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

export NVM_DIR="path/to/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

autoload -U promptinit; promptinit
prompt pure

export EDITOR="link/to/vim"
export VISUAL="link/to/vim"
