console.log('............start async..............');
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    
    const first = result;
    console.log(`First file: ${first}`);
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        
        const second = result;
        console.log(`Second file: ${second}`);
        writeFile('./content/first_second_async.txt',`the final third file is ${first}...${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})
console.log('Done with this one');