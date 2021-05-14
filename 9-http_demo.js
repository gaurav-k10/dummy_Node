const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(('Welcome to homepage'))
    }
    if(req.url === '/about'){
        res.end('Hello to about page')
    }
    res.end(`<h1>OOPSSSSIEEEE</h1>
        <p>We cant find the page</p>
        <a href="/">backhome</a>`
    )
})

server.listen(5000)