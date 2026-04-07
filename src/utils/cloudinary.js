import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINRY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) {
      return null;
    }
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    // console.log("Error in file upload: ", error);
    fs.unlinkSync(localFilepath); //remove the locally
    //saved temporary filed as the upload operation  got failed
    return null;
  }
};
export { uploadOnCloudinary };
// cloudinary.v2.uploader
//   .upload("dog.mp4", {
//     resource_type: "video",
//     public_id: "my_dog",
//     overwrite: true,
//     notification_url: "https://mysite.example.com/notify_endpoint",
//   })
//   .then((result) => console.log(result));
