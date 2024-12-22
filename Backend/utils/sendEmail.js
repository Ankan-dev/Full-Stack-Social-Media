const nodemailer=require('nodemailer');
const {promisify}=require('util');
const dns=require('dns');

const validateEmail=(email)=>{
    
    const emailRegex=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  
    return emailRegex.test(email);
}

const checkDomain=async(email)=>{
    const resolvemx=promisify(dns.resolvemx);
    const domain=email.split('@')[1];
    try {
        const verifyDomain= await resolvemx(domain);
        if(!verifyDomain){
            console.log("this output is from verify domain",false);
            return false;
        }
        console.log("this output is from verify domain",true);
        return true;
    } catch (error) {
        console.log("Error has occured in validating the domain name. The error message is: ",error.message)
        return false;
    }
}

 
           
const sendEmail=async(email,otp)=>{
    //validate email

    console.log("The output is from email",email)

    const validate= validateEmail(email);
    if(!validate){
        return false;
    }

    //check the domain

    /*const domainValidation = await checkDomain(email);

  

    if(!domainValidation){
        return false;
    }*/

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.HOST_EMAIL,
          pass: process.env.APP_PASSWORD,
        },
      });

      try {
        const info = await transporter.sendMail({
            from: `${process.env.HOST_EMAIL}`, // sender address
            to: email, // list of receivers
            subject: "🔒 Verify Your Email - Your OTP Inside!", // Subject line
            text: "Verify Your Email Address", // plain text body
            html: `<p>Please verify your email with the provided OTP</p></br><b>Your OTP is: ${otp}</b></br><p>Please do not share it with any one</p></br><b>It will expire within 5 minutes</b>`, // html body
          });
          
          return info;
      } catch (error) {
        console.log("Error has occured in sending email. The error message is: ",error.message);
        return false;
      }

      
}

module.exports=sendEmail

