// const User = require("./userModel")
// const authenticate = require("../../authentication/authenticate")

const sam = async(req,res) => {
try {
    //     console.log("dddddddddddddd")
   return "Hello"
    // const d = await authenticate.authenticate(req,res)
    // console.log(d,"jwt")
    // const user = await new User({
    // userName:req.body.userName,
    // phoneNumber:req.body.phoneNumber
    // })

    // await user.save()
    // let user1 = await User.find()
    // return user1
    // const dd = await authenticate.verify(req,res)
    // res.json(req.userName)
} catch (error) {
    throw error
}
}

module.exports.sam = sam