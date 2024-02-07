import React, { useState } from 'react';
import axios from 'axios';

function Musicuploader() {
  const [audioData, setAudioData] = useState('');
  const [imageData, setImageData] = useState('');
  const [author, setAuthor] = useState('');
  const [audioName, setAudioName] = useState('');

  const handleAudioFileChange = (event) => {
    const file = event.target.files[0];
    setAudioName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      setAudioData(dataURL);
    };
    reader.readAsDataURL(file);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleAudioImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      setImageData(dataURL);
    };
    reader.readAsDataURL(file);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name:audioName,
      author:author,
      audioData:audioData,
      audioimg:imageData
     };

    axios.post(' http://localhost:9999/allmusic', data)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
        setAudioData('');
        setImageData('');
        setAuthor('');
        setAudioName('');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Audio File:
          <input type="file" accept="audio/*" onChange={handleAudioFileChange} />
        </label>
        <p>Audio Name: {audioName}</p>
      </div>
      <div>
        <label>
          Author:
          <input type="text" value={author} onChange={handleAuthorChange} />
        </label>
      </div>
      <div>
        <label>
          Audio Image:
          <input type="file" accept="image/*" onChange={handleAudioImageChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
      {audioData && <p>Audio Data: {audioData}</p>}
      {imageData && <p>Image Data: {imageData}</p>}
    </form>
  );
}

export default Musicuploader;
