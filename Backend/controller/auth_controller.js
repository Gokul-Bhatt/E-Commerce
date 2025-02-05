const home = async(req,res)=>{
    try {
        res.status(200).send("using the controolers...")
    } catch (error) {
        console.log(error)
    }
}

const register = async(req, res)=>{
    try {
        console.log(req.body)
        const { username, email, phone , password } = req.body;
        const userexist = await User.findOne({email});
        if(userexist){
            res.status(400).send({msg: "email already exist"})
        }
        const userCreated = await User.create({username, email, phone, password})
        res
        .status(201)
        .json({
            msg: "registraton successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),  
        });
    } catch (error) {
        res.status(500).json("internal server error")
    }
};

module.exports = {home,register};