const mongodb = require("mongodb")
const MongoClient =mongodb.MongoClient

const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname = "local"

MongoClient.connect( connectionUrl ,(error ,res)=>{
    if(error){
        return  console.log("error has occured")
    }
    console.log("all perfect")

    const db = res.db(dbname)

    
////////////////////////////////////////////insert two users
    db.collection("users").insertOne(
            {
            name:"Ali" ,
            age:29 ,
            city:"Alex"
            },(error ,data) => {
            if(error){
            console.log("unable to add data")
            }
            console.log(data.insertedId)
        })

    db.collection("users").insertOne(
            {
                name:"hassan" ,
                age:30 ,
                city:"Giza"
            },(error ,data) => {
                if(error){
                console.log("unable to add data")
                }
                console.log(data.insertedId)
            })    
////////////////////////////////////insertmany users 
    db.collection("users").insertMany(
        [
        {
        name:"Ahmed" ,
        age:27 ,
        city:"Alex"
        },
        {
            name:"mona" ,
            age:28 ,
            city:"Alex"
        },
        {
            name:"Adel" ,
            age:27 ,
            city:"cairo"
        },
        {
            name:"mostafa" ,
            age:35 ,
            city:"cairo"
        },
        {
            name:"lamia" ,
            age:27 ,
            city:"Alex"
        },
        {
            name:"islam" ,
            age:27 ,
            city:"Alex"
            },
            {
                name:"mena" ,
                age:28 ,
                city:"cairo"
            },
            {
                name:"mohamed" ,
                age:29 ,
                city:"cairo"
            },
            {
                name:"Ghada" ,
                age:35 ,
                city:"cairo"
            },
            {
                name:"nermin" ,
                age:27 ,
                city:"Alex"
            }
        ]
        ,(error ,data)=>{
        if(error){
        console.log("unable to add data")
        }
         console.log(data.insertedCount)
    })


/////////////////////////////////////////////// find one by id

    db.collection("users").findOne({_id:mongodb.ObjectId("65fdf724e6946bf9ec2e94c1")}
    ,(error , user)=>{
        if(error){
        console.log("unable to add data")
        }
        console.log(user)
    })
///////////////////////////////////// find number of users that match with age:27

    db.collection("users").find({age:27}).count((error ,user)=>{
        if(error){
            return console.log("error has occured")
        }
        console.log(user)
    })

//////////////////////////////////////find users that match with age:27

    db.collection("users").find({age:27}).limit(3).toArray((error ,user)=>{
        if(error){
            return console.log("error has occured")
        }
            console.log(user)
        })

///////////////////////////////////change of the first 4 usersname & age

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fe0a408c4ea66b91e980cb")},{
        $set:{name:"osama"},
        $inc:{age:4}
    }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})
    
    db.collection("users").updateOne({_id:mongodb.ObjectId("65fe0a408c4ea66b91e980cc")},{
        $set:{name:"kamal"},
        $inc:{age:4}
    }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fe0a408c4ea66b91e980cd")},{
        $set:{name:"omar"},
        $inc:{age:4}
    }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fe0a408c4ea66b91e980ce")},{
        $set:{name:"yasmin"},
        $inc:{age:4}
    }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})


////////////////////////////////////////////////////////////////updateMany inc+10 of users age 

db.collection("users").updateMany({},{
    $inc:{age:10}
}).then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})

///////////////////////////////////////////////////////deleteMany of usersage:41

db.collection("users").deleteMany({age:41})
.then((data1)=>{console.log(data1.deletedCount)})
.catch((error)=>{console.log(error)})

})