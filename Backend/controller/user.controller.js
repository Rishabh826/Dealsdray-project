
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config({
    path: '../.env'
})



//signup route handler
 const signup = async (req,res) => {
    try{
        //get data
       
        const {username,fullName,email,password} = req.body;
        
        //check if user already exist
        const existingUser = await User.findOne({email});
        

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }

   
   
   
    
      //secure password
      let hashedPassword;
      try {
          if (!password) {
              throw new Error('Password is missing or undefined.');
          }
      
          hashedPassword = await bcrypt.hash(password, 10);
          console.log(hashedPassword);
      } catch (err) {
          console.error('Error in hashing password:', err.message);
      
          return res.status(500).json({
              success: false,
              message: 'Error in hashing password',
              error: err.message
          });
      }
      

      //create entry for User
      const user = await User.create({username,fullName,email,password:hashedPassword})
      console.log(user);

      return res.status(200).json({
          success:true,
          message:'User Created Successfully',
      });

  }
  catch(error) {
      console.error(error);
      return res.status(500).json({
          success:false,
          message:'User cannot be registered, please try again later',
      });
  }

       

}


//login
const login = async (req,res) => {
    try {

       
        const {email, password} = req.body;
        console.log(req.body);
     
      
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'PLease fill all the details carefully',
            });
        }

        let user = await User.findOne({email});
        console.log(user);
       
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }
        

        const payload = {
            email:user.email,
            id:user._id,
          
        };
        console.log(payload);
        console.log(user.password);
        //verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password) ) {
            //password match
            let token =  jwt.sign(payload, 
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h",
                                });

                                console.log("hello");

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
                secure: true, 
                sameSite:'None'

            }

           
            return  res.cookie("token", token, options)
                  .status(200).json({
                success:true,
                message:'User logged in successfully',
                user,
            });
           
        }
        else {
            //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}



export {signup,login};