const path = require('path')

console.log(path.sep);

const filePath=path.join('\content','subfolder','testing.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const abs = path.resolve(__dirname,'content','subfolder','testing.txt')
console.log(abs)
const absfile = path.resolve(__dirname,filePath)
console.log(absfile)
console.log(`dir path is: ${__dirname}`);