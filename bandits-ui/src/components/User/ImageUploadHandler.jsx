import React, { useState } from 'react';
import { uploadImage } from '../../services/imageService';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Paper elevation={0} sx={{ border: '1px solid #ccc' }}>
      <Box
        component="form"
        onSubmit={handleUpload}
        noValidate
        sx={{
          m: 1,
          padding: 2,
          alignContent: 'center',
          minWidth: 275,
          maxWidth: '40vw',
        }}>
        <Typography variant="h5" gutterBottom>
          Profile Image
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          value={image ? image.name : ""}
        />          <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Image
        </Button>
        {message && <p className={`message ${condition}`}>{message}</p>}
      </Box>
    </Paper>
  );
}

export default ImageUploadHandler;
