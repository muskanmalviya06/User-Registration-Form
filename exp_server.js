
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(express.urlencoded({extended:true,limit:'10mb'}));
app.use(express.static('public'));
app.use(session({secret:"test123!@#",resave:true,saveUninitialized:true}));

app.get("/", function (req, res) {
    res.send('<ul><li><a href="/">Home</a></li><li><a href="/aboutus">Aboutus</a></li></ul>' + "<h1>This is home page</h1>");
});

app.get("/aboutus", function (req, res) {
    res.send('<ul><li><a href="/">Home</a></li><li><a href="/aboutus">Aboutus</a></li></ul>' + "<h1>This is aboutus page</h1>");
});

app.get("/service", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "service.html"));
});

app.get("/getinputform",function(req,res){
    res.sendFile(path.join(__dirname,"public","input1.html"));
});

app.get("/getinput_submit",function(req,res){
    const name = req.query['name'];
    const dob = req.query['dob'];

    res.send("Name :- " + name + "<br>Date of Birth :- " + dob);
});

app.get("/post_input",function(req,res){
    res.sendFile(path.join(__dirname,"pubic","post_input.html"));
});

app.post("/post_html",function(req,res){
    const email=req.body.email;
    const pass=req.body.pass;
    res.send("email :-"+email+"<br>password"+pass);
});

app.get("/session_form",function(req,res){
    res.sendFile(path.join(__dirname,"public","session_input.html"));
});
app.get("/session1",function(req,res){
    req.session.msg=req.query['msg'];
    res.send('<h3>session card data set </h3><a href="/session2">Click to see msg in session card</a>');
});
app.get("/session2",function(req,res){
    res.send("data in session card:-"+req.session.msg);
});

app.listen(8080, () => console.log("express server running at port no 8080"));
