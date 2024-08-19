import React, { useState } from 'react';
import axios from 'axios';

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
      console.log("No image uploaded");
      return;
    }

    const type = image.type;
    const imageName = image.name;
    const token = localStorage.getItem("token"); 

    try {
      
      const response = await axios.post(
        'http://localhost:8080/presignedurl',
        { type, name: imageName },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          withCredentials: true,
        }
      );
      const url = response.data;

      
      await axios.put(
        url, 
        image, 
        { headers: { "Content-Type": type } }
      );

      console.log("Successfully uploaded!");
      setCondition("success");
      setMessage("Image uploaded successfully!");
    } catch (error) {
      console.error("Error during upload:", error);
      setCondition("danger");
      setMessage(error.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="form">
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Add Image to S3</button>
      {message && <p className={`message ${condition}`}>{message}</p>}
    </div>
  );
}

export default ImageUploadHandler;
