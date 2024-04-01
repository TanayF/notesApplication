"use client"
import { useNavigate } from 'react-router-dom';

import React from 'react'
import styled from 'styled-components';
import { FaUpload, FaStar } from 'react-icons/fa';
const UploadButton = styled.button`
  background-color: #9400d3; /* Purple button color */
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6238f6; /* Darker purple on hover */
  }
`;
const Notes = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    // Navigate to the desired page (e.g., '/dashboard')
    navigate('/Upload');
  };

  return (
    
    <UploadButton onClick={handleUploadClick}>
      <FaUpload /> Upload Notes
    </UploadButton>
  );
};


export default Notes