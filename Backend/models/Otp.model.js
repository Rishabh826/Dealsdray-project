import mongoose from 'mongoose'
import {mailSender} from '../utills/SendOtp.js'
import {otpTemplate} from '../utills/mailTemplate.js'

const otpSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true

    },
    otp:{
        type:String,
        required:true

    },
    createdAt:{
        type: Date,
		default: Date.now,
		expires: 60 * 5, 

    }
})

async function  SendVerificationMail(email,otp){
    try{
        const MailResponse = mailSender(email,"Verification E-Mail",otpTemplate(otp));

        console.log("Mail sent Successfully",MailResponse.response)

    }
    catch (error){
        console.log("Error occurred while sending email: ", error);
		throw error;

    }
}

otpSchema.pre("save",async function(next){
    console.log("New document saved to database");

    if (this.isNew) {
        try {
            await SendVerificationMail(this.email, this.otp);
        } catch (error) {
            console.error("Error sending verification email:", error);
           
        }
    }
	next();
})

const OTP=  mongoose.model("OTP",otpSchema);

export {OTP}
