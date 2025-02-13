const adminmiddleware = async(req, resizeBy, next)=>{
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({msg: "user is not admin"});
        }
        next();
    } catch (error) {
        console.log(error)
    }
};

module.exports = adminmiddleware;