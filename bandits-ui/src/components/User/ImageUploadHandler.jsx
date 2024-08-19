import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadHandler() {
  const [image, setImage] = useState(null);

  // Handle Image Change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!image) {
      console.log("No image uploaded");
      return;
    }

    const type = image.type;
    const imageName = image.name;

    try {
      // Get the presigned URL
      const response = await axios.post('http://localhost:8080/presignedurl', { type, name: imageName });
      const url = response.data;

      // Upload the image to S3
      await axios.put(
        url, 
        image, 
        { headers: { "Content-Type": type } }
      );

      console.log("Successfully uploaded!");
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

  return (
    <div className="form">
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Add Image to S3</button>
    </div>
  );
}

export default ImageUploadHandler;
