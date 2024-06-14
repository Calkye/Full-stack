const express = require('express');
const app = express();

app.use('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res)=>{
    res.render('index');
    

});





app.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
})