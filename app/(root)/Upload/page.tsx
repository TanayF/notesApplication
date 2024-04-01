"use client"
import React from 'react';
import Dropzone from 'react-dropzone';
const FileUpload = () => {
    const handleDrop = (acceptedFiles: File[]) => {
        // Handle the uploaded files (e.g., send them to a server or store them)
        console.log('Accepted files:', acceptedFiles);
      };
      
  
    return (
        <div>
            <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop files here, or click to select files</p>
            </div>
          )}
            </Dropzone>
      </div>
    );
  };
  
  export default FileUpload;
  