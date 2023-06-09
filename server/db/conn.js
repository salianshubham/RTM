const mongoose = require('mongoose'); 

const db = "mongodb+srv://shubhamsalian:rtm123@rtm.aa1rojz.mongodb.net/RTM?retryWrites=true&w=majority";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB Connected...') })
    .catch(err => console.log(err));