const express = require('express')
var app = express();
var PORT = 3000;



app.use(date =(req,res,next)=>{
    var newdate=new Date();
    var hours=newdate.getHours();
    var day=newdate.getDay();
    if((hours<9|| hours>17)||((day==6 || day==0))){
        res.send('closed');
    }
    else{next()};
   
    
});
app.use(express.static('Contains'));

app.listen(3000, (err) => {
 err? console.error(err) : console.log(`server is running on port ${PORT}`);
})