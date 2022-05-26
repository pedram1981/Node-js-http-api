import http from 'http'
import url from 'url'
import * as generateData from './src/db/generate-data.js'
import * as candidate from './src/controllers/candidate-api.js'
import * as employer from './src/controllers/employer-api.js'
import * as auth from './src/controllers/authentication.js'


const server=http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  req.setTimeout(60000, function() {req.abort();});

if(url.parse(req.url,true).pathname=='/loadData' & req.method=='POST'){//version demo or production
     generateData.loadData(url.parse(req.url,true).query["version"]);
     res.end(JSON.stringify("Load data successful"));
} if(url.parse(req.url,true).pathname=='/logIn' & req.method=='POST'){//version demo or production
    auth.loginPost(req,res);;
} else if(url.parse(req.url,true).pathname.toLowerCase().includes('candidate')){
       candidate.send(req,res);
} else if(url.parse(req.url,true).pathname.toLowerCase().includes('employer') ||
     url.parse(req.url,true).pathname.toLowerCase().includes('job') ||
     url.parse(req.url,true).pathname.toLowerCase().includes('position')){
     employer.send(req,res);
} 
})

const PORT=process.env.PORT || 5001

server.listen(PORT,()=> console.log('Server runing on port '+ PORT))