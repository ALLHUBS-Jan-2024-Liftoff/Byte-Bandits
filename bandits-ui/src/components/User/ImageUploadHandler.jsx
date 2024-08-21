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
      const responseMessage = await uploadImage(image);
      setCondition("success");
      setMessage(responseMessage);

      // Reset the form after successful upload
      setImage(null);
    } catch (error) {
      console.error("Error during upload:", error);
      setCondition("danger");
      setMessage(error.message || "Upload failed");
    }
  };

  return (
    <div className="form">
      <h1>Upload Image</h1>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        value={image ? image.name : ""}
      />
      <button onClick={handleUpload}>Add Image to S3</button>
      {message && <p className={`message ${condition}`}>{message}</p>}
    </div>
  );
}

export default ImageUploadHandler;
