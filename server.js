const express = require('express');
const path = require('path');

const studentsDb = require('./data/students-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.redirect('/students');
});
app.listen(3000, function () {
    console.log('listening on port 3000');
})

app.get('/students', function (req, res) {
    const students = studentsDb.getAll();
    res.render('students/students', { students });
});

app.get('/student/:id', function (req, res) {
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/student', { student: studentsDb.getOne(req.params.id) });
});

