const express = require('express');

// express app
const app = express();



// register view engine -- has to go after the requests
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); - if you were to keep html folders in another folder
//app.set(...) would tell it to look in the views folder for the myviews folder

// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];

  // res.send('<p>home page</p>'); = html that would show up on page...instead we will direct it to a file with the html
  // root: __dirname tells it where to find the file, in the computer directory 
  //- ./index.html = find html file in root directory
  
  res.render('index', {title: 'Home', blogs });
  //res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about', {title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// 404 page - will only get used if the above 'gets' don't get used.  
//After it goes thru them all and if nothing works, then it will hit the 404 get
//404 should be at the bottom so it gets hit only if none of above do
app.use((req, res) => {
  res.status(404).render('404', {title: '404' });
  //res.status(404) is an object that alerts an error...otherwise, it is just going to a webpage 404.html
});
