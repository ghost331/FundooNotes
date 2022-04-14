import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
export const main=async(receiveremail,token)=>{
    const senderemail=process.env.EMAIL;
const pwd=process.env.PASSWORD;
    console.log("receiver email and token",receiveremail," ",token);
    console.log("sender email and password",senderemail," ",pwd);
    let transporter = nodemailer.createTransport({
        service:'gmail',
        secure: false,
        auth: {
          user: senderemail,
          pass: pwd 
        },
      });
       await transporter.sendMail({
        from: senderemail, 
        to: receiveremail, 
        subject: "ForgetPassword",
        text: "Hello", 
        html: `<b>Hello world?</b>
        <p> to reset your password <a href= http://localhost:3000/api/v1/forgetpassword/${token}>click here</a></p>`,
      });
      //console.log("Message sent: %s", info.messageId);
     // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}