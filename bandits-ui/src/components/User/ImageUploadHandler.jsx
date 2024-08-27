import React, { useState } from 'react';
import { uploadImage } from '../../services/imageService';

function ImageUploadHandler() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [condition, setCondition] = useState("");

  // Handle Image Change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!image) {
      setCondition("danger");
      setMessage("Please select an image to upload.");
      return;
    }

    try {
      // Get the pre-signed URL from the backend
      //const presignedUrl = await getPresignedUrl(image.type);

      // Upload the image to S3 using the pre-signed URL
      const responseMessage = await uploadImage(image);
      setCondition("success");
      setMessage(responseMessage);

      setImage(null);  // Clear the selected image after upload
      document.querySelector('input[type="file"]').value = '';  // Reset file input field
    } catch (error) {
      console.error("Error during upload:", error);
      setCondition("danger");
      setMessage(error.message || "Upload failed");
    }
  };

  return (
    <div className="form">
        <h1>Upload Image</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload to S3</button>
        {message && <p>{message}</p>}
    </div>
);
}

export default ImageUploadHandler;