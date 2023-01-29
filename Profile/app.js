const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bodyParserForm = bodyParser.urlencoded();

app.set('view engine', 'ejs'); 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// mongoose
const Profile = require('./models/profileSchema');

const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect("mongodb+srv://omnia:1234@cluster0.pq6wgwd.mongodb.net/profile?retryWrites=true&w=majority")
.then((result)=> {
    app.listen(8080, ()=>{
        console.log(`http://localhost:8080`)
    })
})
.catch( (err) => {console.log(err);} );

// multer for save imagesin db
const multer = require('multer');
const path = require('path');

app.use('/uploads',express.static(path.join(__dirname,"/uploads")));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage})
// _____________________________

app.get('/',function(req,res){
    res.redirect('index');
});

app.get('/index',(req,res)=>{
    // res.render("index");
    Profile.find().then(
        (result)=>{
            res.render("index",{arrResult:result});
        })
        .catch( (err)=>{console.log(err)});
})

// show data from database
app.get('/admin',(req,res)=>{
    // res.render("admin");
    Profile.find().then(
        (result)=>{
            const i = 1;
            res.render("admin",{arrResult:result,i});
        })
        .catch( (err)=>{console.log(err)});
})

app.get('/sites',(req,res)=>{
    res.render("sites");
})

app.get('/certificates',(req,res)=>{
    res.render("certificates");
})

// ___________________________________

// add website and save to database
app.post('/sites',upload.single('image'),function(req,res){ 
    
    const profile = new Profile({
        name:req.body.name,
        github:req.body.github,
        behance:req.body.behance,
        image:req.file.filename
    })
    console.log(req.body);
    profile.save()
    .then(()=>res.redirect('/sites'))
    .catch(err=>console.log(err))    

});

// delete
app.delete('/admin/:id',(req,res)=>{ //same link in fetch

    Profile.findByIdAndDelete(req.params.id)
    .then( 
        (result)=>{
          // لو احنا في مكان الديليت وعاوزين بعد ما يمكح يزدينا هنا تانيه هنعمل ريدايركت للصفحة الي عاوزين يودينا ليها بعد الديليت
          // but redirect not here shouldn't write with app.delete ==> ريدايركت مبتنفعش هناااا
          res.json( { mylink:"/sites" } ); // دي الداتا الي بتنبعت علي الفيتش وتنطبع هناك
        
        })
    .catch( (err)=>{console.log(err)});
});


//Update
app.get('/update/:id',(req,res,next)=>{
    
    Profile.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err,docs)=>{

        if(err) {
            console.log(err);
            next(err);
        }
        else {
            res.render('update', {Profile:docs})
        }
        // console.log(docs);
    })
     
});

app.post('/update/:id',upload.single('image'),(req,res,next)=>{

    Profile.findByIdAndUpdate({_id:req.params.id}, {
        name:req.body.name,
        image:req.file.filename,
        github:req.body.github,
        behance:req.body.behance  
    },
    (err,docs)=>{
        if(err){
            console.log(err);
            next(err);
        }
        else{
            res.redirect('/admin');
        }

    })

})