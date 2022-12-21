const {MongoClient}= require("mongodb");
require('dotenv').config();
let connectedinfo;
module.exports={
    dbconnection:(cb)=>{
        MongoClient.connect(process.env.MONGODB_URL).then((client)=>{
           connectedinfo=client.db() ;
           return cb();
        }).catch(err=>{
       console.log(err);
       return cb(err);
        });

    },
    getDb:()=>connectedinfo
}