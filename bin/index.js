#!/usr/bin/env node

const yargs = require('yars')
const MasterDataService = require('../src/MasterDataService')

const configFileOption = {
    type: 'string',
    alias: 'config', 
    demandOption: true,
    describe: 'Config file name ( default is .mdconfig ), which should be placed at the project root',
}
const generateConfigFileOption = {
    type: 'string',
    alias: 'generate-config-file',
    demandOption: false,
    describe: 'Generate config file sample'
}

const options = yargs
    .usage('Usage: mdd [OPTIONS]...')
    .option('-c', configFileOption)
    .option('-g', generateConfigFileOption)
    .argv;

// TODO: impl service logic use here
