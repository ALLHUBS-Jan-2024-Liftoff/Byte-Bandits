import axios from 'axios';

const LOCAL_API_IMAGE_URL = "http://localhost:8080/presignedurl";

export const uploadImage = async (image) => {
  const type = image.type;
  const imageName = image.name;
  const token = localStorage.getItem("token");

  try {
    // Get the presigned URL from the backend
    const response = await axios.post(
      LOCAL_API_IMAGE_URL,
      { type, name: imageName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    const url = response.data;

    // Upload the image to S3
    await axios.put(
      url,
      image,
      { headers: { "Content-Type": type } }
    );

    return "Image uploaded successfully!";
  } catch (error) {
    console.error("Error during image upload:", error);
    throw new Error(error.response?.data?.message || "Image upload failed");
  }
};