import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Paper elevation={0} sx={{ border: '1px solid #ccc' }}>
      <Box
        component="form"
        onChange={handleImageChange}
        noValidate
        sx={{
          m: 1,
          padding: 2,
          alignContent: 'center',
          minWidth: 275,
          maxWidth: '40vw',
          marginBottom: 2,
        }}>
        <Typography variant="h5" paddingBottom={5}>
          Upload Profile Photo
        </Typography>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button
          variant="contained"
          component="label"
          onClick={handleUpload}
          sx={{ mt: 2 }}>
        Upload Image
        </Button>
      </Box>
    </Paper>
  );
}

export default ImageUploadHandler;
