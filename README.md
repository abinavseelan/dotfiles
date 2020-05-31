# dotfiles 

> Dotfiles & automation script to set up dev environment

## Description

This project helps set up the following on a new / existing machine (Tested on MacOS):

1. HomeBrew
2. VSCode extensions
3. zshrc
4. gitConfig
5. FiraCode
6. Project Boilerplate

## Setting things up

1. Clone this repository

2. If node is not already set up on the machine, execute the `getNode.sh` script to install [nvm](https://github.com/nvm-sh/nvm), which in turn installs the latest node version.

3. Once node is set up on the machine, install the dependencies for this project using `npm install`.

4. Run `node setup` to start the setup process. Multiple options can be selected at once. Each step is synchronous.
