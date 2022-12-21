const {MongoClient}= require("mongodb");
let connectedinfo;
module.exports={
    dbconnection:(cb)=>{
        MongoClient.connect("mongodb+srv://ipsha:VQtTSBiEW388Um1e@cluster0.hagje6q.mongodb.net/bookstore?retryWrites=true&w=majority").then((client)=>{
           connectedinfo=client.db() ;
           return cb();
        }).catch(err=>{
       console.log(err);
       return cb(err);
        });

    },
    getDb:()=>connectedinfo
}