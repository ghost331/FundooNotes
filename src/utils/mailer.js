import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
export const main=async(receiveremail,token)=>{
    const senderemail=process.env.EMAIL;
const pwd=process.env.PASSWORD;
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
        <p> to reset your password <a href=${token}>click here</a></p>`,
      });
      //console.log("Message sent: %s", info.messageId);
     // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export const main2=async(email)=>{
  const senderemail=process.env.EMAIL;
const pwd=process.env.PASSWORD;
    let transporter = nodemailer.createTransport({
        service:'gmail',
        secure: false,
        auth: {
          user: senderemail,
          pass: pwd 
        },
      });
      await transporter.sendMail({
        from:senderemail, 
        to:email, 
        subject: "Registration",
        text: "Hello", 
        html: `<b>Hello world?</b>
        <p> you are successfully registered</p>`
      });
}