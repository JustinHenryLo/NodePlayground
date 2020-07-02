const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{
    //HOW TO SERVE HTML PAGES with node only
    //if url is index
    if(req.url === "/" ){
        //read the file index.html in public folder
        fs.readFile(path.join(__dirname, 'public','index.html'), 
        (err, content)=>{
            //content contains the html output from index.html
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        });
       
        //200 status and content type text/html
    }
    //HOW TO SERVE API with node only
    else if(req.url=='/api/users'){
        const users = [
            {name:"bob"},
            {name:"alice"}
        ]
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }
});
server.listen(PORT,()=>console.log(`Server Running on ${PORT}`));