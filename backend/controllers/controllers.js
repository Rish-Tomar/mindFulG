import User from '../model/User.js'


export async function signUpController(req,res){
    try{
        console.log("request recieved",req.body)
        const user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(200).json({
                message:"User already exists,Try signin"
            })
        }
        else{       
            const UserCreate =await User.create(req.body)
            if(UserCreate){
                return res.status(400).json({
                    message:"Successful",
                    name:UserCreate.name,
                    email:UserCreate.email,
                    phoneNumber:UserCreate.phoneNumber
                })
            }
        }
    }catch(err){
        if(err){
            console.log("ERR",err)
            return res.status(200).json({
                message:"error",
                err
            })
        }
    }
}

export async function logInController(req,res){
    try{
        console.log("request recieved",req.body)
        const user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(200).json({
                name:user.name,
                email:user.email,
                phoneNumber:user.phoneNumber
            })
        }
        else{                  
            return res.status(400).json({
                message:"No user Found",
            })
        }
    }catch(err){
        if(err){
            console.log("ERR",err)
            return res.status(200).json({
                message:"error",
                err
            })
        }
    }
}