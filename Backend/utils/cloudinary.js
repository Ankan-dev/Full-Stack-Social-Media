const cloudinary=require('cloudinary').v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

let uploadToCloudinary=async(localStorageFile)=>{
    if(!localStorageFile){
        return false;
    }
    try {
        const uploadResult = await cloudinary.uploader
        .upload(
            localStorageFile, {
                resource_type:'auto'   //for check the option press ctrl+space
             }
        ) 

        console.log(uploadResult); //optional

        return uploadResult.url;
    } catch (error) {
        console.log(error.message); //optional
        return false;
    }
}

module.exports=uploadToCloudinary