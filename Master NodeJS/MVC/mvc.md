# (MVC) => Model view controller 
# //1. model 
# //2. view
# //3. controller



# 1. Model => Mangae the data and database . in this case it intrect with the database
# 2. view => the user interface typically handle by a templeting engine like html css javascript 
# 3. controller => Handle User input intreact with the model  and manipulated the model 
(and it work as middle man like example in restorent waiter)

// Directoy Structre of the (MVC)


mvc-demo/
├── models/
│   └── user.js
├── views/
│   ├── index.ejs
│   └── users.ejs
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── app.js
└── package.json




# model ✅[in the javascript file ]
# model/user.js  
# in thish section we make Schema of the model (basically store the data)

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    }
    gender:{
        type:String,
        required:true,
    },
    jobTitle:{
        type:String,
    },
    age:{
        type:Number,
        required:true,
    },
},{timestamps:true,})




// 1.  export const User=mongoose.model("User",userSchema),
               OR
//  2. const User=mongoose.model("User",userSchema),

   module.exports = User ;
   above both are core t we are use anyone  foe exporting the user.js      


 
# Note ✅ 
1.mongoose.Schema= > define the Structr of the data (which type of the data)

2. mongoose.mpdel => creat the model which are intrect to the database


2. View: views/index.ejs and views/users.ejs
(in the views sectio we are makeing the ejs file )



// 1. ejs same like the html file but have more power to make this dyanamically




# 3. Controller: controllers/userController.js
const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // find the user..
        res.render('users', { users });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.redirect('/users');
    } catch (err) {
        res.status(500).send(err);
    }
};


# 4. Routes: routes/userRoutes.js


in this section we are make the server 

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router;


# 5. Main App :app.js
 this file intilized the express app and connect everthing together



 const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/userRoutes');

// Database Connection
mongoose.connect('mongodb://localhost:27017/mvc-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use(userRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
