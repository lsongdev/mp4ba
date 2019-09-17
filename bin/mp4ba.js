#!/usr/bin/env node

const mp4ba = require('..');

const help = () => {
  console.log();
  console.log(' mp4ba <command> [options]');
  console.log();
  console.log(' - ls');
  console.log(' - help');
};

const [ command, ...parameters ] = process.argv.slice(2);

const commands = {
  help,
  async ls(category, page) {
    const list = await mp4ba(category, page);
    list.forEach(item => {
      console.log(item.name);
    });
  }
};

(commands[command] || help).apply(this, parameters);