import {OTP} from "../models/Otp.model.js";




const SendOtp = async (req,res)=>{
    try {
        const {email}= req.body;

        const checkUser= OTP.findOne({email})

        if(!checkUser){
            return res.status(401).json({
                success:false,
                message:`User Already Exist`
            })

        }
  


        
            
            
         let  randomOtp = Math.floor(Math.random() * 900000) + 100000; // Generate a random number between 100000 and 999999
           let otp=randomOtp.toString(); // Convert the number to a string
       
     
      
        const otpPayload = { email,otp}

        const Saveotp = await OTP.create(otpPayload);
        console.log("otppaylod",Saveotp)

        return res.status(200).json({ success: true, message:"otp send" })

        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: error.message })
        
    }

}

export {SendOtp}