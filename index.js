const http = require("http");
const path = require("path");
const fs = require("fs");

//Objective:
/*
    dynamically use the URL to get a file in the public folder
*/
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  //get path of folder in public
  var filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //get extension of file
  var extensionOfFile = path.extname(filePath);
  var contentType = "text/html";
  switch (extensionOfFile) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  //read file
  fs.readFile(filePath, (err, content)=>{
    //if there are any errors
      if(err){
        //when the file is not found
          if(err.code == "ENOENT"){
              fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(200);
                res.end(content, 'utf8');
              });
          }
          else{
            //any other error (prolly server error)
            res.writeHead(500);
            res.end(`<h1> Server Error:<h1><h2>${err.code}<h2>`);
          }   
      }
      //if file has no error
      else{
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content,'utf-8');
      }
  })

});


server.listen(PORT, () => console.log(`ITS RUNNING!!! on ${PORT}`));