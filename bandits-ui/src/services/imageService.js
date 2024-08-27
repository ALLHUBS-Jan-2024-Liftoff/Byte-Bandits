import axios from 'axios';

const LOCAL_API_IMAGE_URL = "http://localhost:8080/s3/presignedurl";

// Function to get a presigned URL from the backend
export const getPresignedUrl = async (fileType, fileName) => {
  const token = localStorage.getItem("token");

  try {
    // Request the presigned URL from the backend
    const response = await axios.post(
      LOCAL_API_IMAGE_URL,
      { type: fileType, name: fileName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    return response.data; // The presigned URL
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw new Error("Failed to get presigned URL");
  }
};

// Function to upload an image to S3 using the presigned URL
export const uploadImage = async (image) => {
  const type = image.type;
  const imageName = image.name;

  try {
    // Step 1: Get the presigned URL from the backend
    const presignedUrl = await getPresignedUrl(type, imageName);

    // Step 2: Upload the image to S3 using the presigned URL
    await axios.put(presignedUrl, image, {
      headers: { "Content-Type": type },
    });

    return "Image uploaded successfully!";
  } catch (error) {
    console.error("Error during image upload:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw new Error("Image upload failed");
  }
};