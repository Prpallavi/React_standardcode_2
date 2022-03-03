


module.exports={
    createUser: async (req, res,model) => {
	console.log("model",model)
	const user = new model(req.body);
	try{

        console.log(user);
        
        await user.save()
        
        .then((e)=>res.status(201).send(e))
        
        .catch((e)=>console.log(e))
        
        }catch (err){
        
        res.status(500).send({error:"user Doesn't Created"});
        
        }
},
viewUser: async (req,res,model) => {
    console.log("model",model)
	const view = await model.find()
	try{
		console.log(view)
		res.send(view)
}
catch (err){
	res.status(500);
}
},
updateUser: async (req, res,model) =>  {
    console.log("model",model)
	const updates = await model.findByIdAndUpdate({_id: req.params.id },req.body)
	 try {
	
		console.log(updates);

		 await updates.save()
		res.send(updates)
	} catch (err){
		res.status(500).send({error:"Updation Failed"});
	}
},
deleteUser: async (req, res,model) => {
    console.log("model",model);
    try {
        const del = await model.findByIdAndRemove({ _id: req.params.id })
            res.status(201).send({ Result: "Deleted Successfully" })
            console.log(del)
    } catch (err) {
        res.status(500).send({ error: "Invalid Id" });
    }
},
}
