
const Profile=require('../Model/ProfileModel')

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


getCountry: async (req,res,model) => {
    console.log("model",model)
/* 	const view = await model.find().populate('country_id') */
const view=await model.find({country_id:req.params.id})
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
filter: async (req, res,model) => {
	const filters = req.query;
	//console.log(req.query)
	//console.log(Array.isArray(model))
 
	const filtered = await model.find(filters).sort({"city":1}).exec()
	res.send(filtered);

  },
paginatedResults: async (req, res, model) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < await model.countDocuments().exec()) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      try {
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
		return  res.json(res.paginatedResults)
        next()
      } catch (e) {
        res.status(500).json({ message: e.message })
      }
    }
	
  }

