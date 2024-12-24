const bcrypt=require('bcrypt');

const hashPassword= async(password)=>{
    const salt =15;

    const newPass= await bcrypt.hash(password,salt);

    return newPass;
}


const checkPassword = async (dbPassword,clientPassword)=>{
    const passwordStatus= await bcrypt.compare(clientPassword,dbPassword);
    return passwordStatus;
}

module.exports={hashPassword,checkPassword}; //named export