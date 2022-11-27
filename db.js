const {MongoClient}= require("mongodb");
let connectedinfo;
module.exports={
    dbconnection:(cb)=>{
        MongoClient.connect("mongodb://localhost:27017/bookstore").then((client)=>{
           connectedinfo=client.db() ;
           return cb();
        }).catch(err=>{
       console.log(err);
       return cb(err);
        });

    },
    getDb:()=>connectedinfo
}