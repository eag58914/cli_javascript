const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

clear();

console.log(chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' })));

// checking to see if the current folder isn't a repository

if (files.directoryExists('.git')) {
	console.log(chalk.red('Already a Git repository!'));
	process.exit();
}
