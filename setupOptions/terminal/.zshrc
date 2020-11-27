# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

plugins=(git zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


# Set Spaceship ZSH as a prompt
SPACESHIP_PROMPT_ORDER=(
  dir           # Current directory section
  git           # Git section (git_branch + git_status)
  exec_time     # Execution time
  node          # Node.js section
  line_sep
  char          # Prompt character
)

autoload -U promptinit; promptinit
prompt spaceship

### Custom commands

mkcd() {
	mkdir -p -- "$1" && cd -P -- "$1"
}
