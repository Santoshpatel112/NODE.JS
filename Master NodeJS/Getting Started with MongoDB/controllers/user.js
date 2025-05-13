/// we are atteched with our routes

const User=required("../models/users");
async function handleGetAllUsers(req,res){
    const allDbUser=await User.find({});
    return res.json(allDbUser);
}
module.export={
    handleGetAllUsers
}