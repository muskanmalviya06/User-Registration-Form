import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/user_reg", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "user_regi.html"));
});

app.post("/user_reg_submit", function (req, res) {
    const fname = req.body.fname;
    const mname = req.body.mname;
    const lname = req.body.lname;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const email = req.body.email;
    const pass = req.body.password;
    const question = req.body.question;
    const answer = req.body.answer;
    const hobbies = req.body.hobbies;

    res.send("First Name :- " + fname + "<br><br>" +
        "Middle Name :- " + mname + "<br><br>" +
        "Last Name :- " + lname + "<br><br>" +
        "Gender :- " + gender + "<br><br>" +
        "Date of Birth :- " + dob + "<br><br>" +
        "Email :- " + email + "<br><br>" +
        "Password :- " + pass + "<br><br>" +
        "Security Question :- " + question + "<br><br>" +
        "Security Answer :- " + answer + "<br><br>" +
        "Hobbies :- " + hobbies + "<br><br>" +
        "<a href='/user_reg'>Back to Registration</a>");

});
app.listen(8080, function () {
    console.log("Server running at port no 8080");
})