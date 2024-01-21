import {v2 as cloudinary} from "cloudinary";
import fs from "fs";



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // filr has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally sssaved temporary file as the upload operation ...
        return null
    }
}

export {uploadOnCloudinary}
          
