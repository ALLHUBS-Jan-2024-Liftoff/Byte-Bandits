import axios from 'axios';

const LOCAL_API_IMAGE_URL = "http://localhost:8080/api/s3/presignedurl";

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

    const { url, key } = response.data; // Assuming the response contains both URL and key

    // Upload the image to S3 using the presigned URL
    await axios.put(
      url,
      image,
      {
        headers: {
          "Content-Type": type,
        },
      }
    );

    return `Image uploaded successfully! File key: ${key}`;
  } catch (error) {
    console.error("Error during image upload:", error);
    throw new Error(error.response?.data?.message || "Image upload failed");
  }
};