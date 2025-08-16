import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(logSymbols.success, chalk.green.italic('Servidor iniciado com sucesso!'));

console.log(logSymbols.error, chalk.red.bgMagenta.italic('servidor com problema'));

/*
console.log(chalk.blue.bgGreen.italic('Olá, eu sou '));
console.log(chalk.green.bgCyan.bold('Jarvis'));
*/