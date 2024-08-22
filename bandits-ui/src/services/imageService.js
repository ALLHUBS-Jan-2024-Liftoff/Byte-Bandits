import axios from 'axios';

const LOCAL_API_URL = "http://localhost:8080/api/s3";

export const uploadImage = async (image) => {
  const type = image.type;
  const imageName = image.name;
  const token = localStorage.getItem("token");

  try {
    //  Get the presigned URL from the backend
    const presignedUrlResponse = await axios.post(
      `${LOCAL_API_URL}/presignedurl`,
      { name: imageName, type: type },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const presignedUrl = presignedUrlResponse.data.url;

    // Upload the image to S3 using the presigned URL
    await axios.put(presignedUrl, image, {
      headers: { "Content-Type": type },
    });

    return "Image uploaded successfully!";
  } catch (error) {
    console.error("Error during image upload:", error);
    throw new Error(error.response?.data?.message || "Image upload failed");
  }
};