console.log('..........start............');
const {readFileSync, writeFileSync} = require('fs');
const { setFlagsFromString } = require('v8');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt','utf-8')

//console.log(first,'........', second);

writeFileSync('./content/first_second.txt',`the resulted added files are: ${first}............. ${second}`,
    {flag:'a'}
)
console.log('..............end...............');