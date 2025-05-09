const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://netninja:test123@cluster0.x3vbojs.mongodb.net/note?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

    
app.get('/',(req,res) => {
    const blogs =[
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    //res.send('<p>Home page</p>');
    res.render('blogs/index', {title: 'Home', blogs});
});

app.get('/about',(req,res) => {
    //res.send('<p>about page</p>');
    res.render('about',{title: 'About'});
});

app.get('/about-us', (req,res) => {
    res.redirect('/about');
}
);

app.use('/blogs',blogRoutes);

app.use((req,res) => {
    res.status(404).render('404', {title: '404'});
});