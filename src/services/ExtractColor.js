export const extractColorsFromImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to upload image: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during image upload:', error);
    throw error;
  }
};
