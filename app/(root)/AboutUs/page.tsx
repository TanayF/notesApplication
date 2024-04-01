// AboutUs.tsx
"use client"
import React from 'react';
import styled from 'styled-components';
import { FaUpload, FaStar } from 'react-icons/fa'; // Import relevant icons

const Container = styled.div`
  background-color: #000; /* Black background */
  color: #fff; /* White text color */
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;



const ReviewSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const StarIcon = styled(FaStar)`
  color: #ffcc00; /* Yellow star color */
  margin-right: 5px;
`;

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Description>
        Welcome to our platform! We believe in the power of knowledge sharing. Upload your college notes and help fellow students succeed.
        Welcome to Notewave, your go-to platform for sharing and discovering college notes! 📚✨
      
      Our Mission
      At NoteWave, we believe that knowledge should be accessible to all. Whether you’re a seasoned student or just starting your academic journey, our platform empowers you to contribute and benefit from a vibrant community of learners.

      How It Works
      Upload Your Notes:
      Share your class notes, study guides, and exam prep materials with fellow students.
      Simply upload your documents, and our system will review and approve them for quality.
      Help Others Succeed:
      By uploading your notes, you’re not only helping yourself but also supporting your peers.
      Imagine the impact of your well-organized lecture summaries on someone else’s understanding of a complex topic!

      </Description>
      
      <ReviewSection>
        <StarIcon />
        <p>Rate to Improve</p>
      </ReviewSection>
      {/* Add relevant images here */}
    </Container>
  );
};

export default AboutUs;
