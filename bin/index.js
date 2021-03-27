#!/usr/bin/env node

const yargs = require('yargs')
const MasterDataService = require('../src/MasterDataService')

const accountOption = {
    type: 'string',
    alias: 'account-name',
    demandOption: true,
    describe: 'The VTEX account name'
}
const entityOption = {
    type: 'string',
    alias: 'entity',
    demandOption: true,
    describe: 'The dataentity reference, eg.: CL'
}

const options = yargs
    .usage('Usage: mdd [OPTIONS]...')
    .option('a', accountOption)
    .option('e', entityOption)
    .argv;

console.table(options)

// TODO: impl service logic use here
