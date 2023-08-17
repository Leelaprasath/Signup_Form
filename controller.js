const model=require('./model')

const adduser=async(req,res)=>{

    const user = new model.SignupCollection(req.body);

    const output = [];

    try {
        await user.save();
        output.push({"message": "Added", "error": ""});
        res.json(output);
    }catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        output.push({"message": "", "error": errorList});
        res.json(output);
    }
}

const login=(req,res)=>{
    try {
       model.SignupCollection.find({
  "email": { $regex: new RegExp(req.body.email, "i") },
  "password": req.body.password
})
            .then((result) => {
                 (result.length>0)?res.send('true'):res.send("false")
            });
    } catch(err) {
        res.json(err.message);
    }
}

module.exports = {adduser,login};
