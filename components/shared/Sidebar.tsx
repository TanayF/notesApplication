"use client"
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStickyNote, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const sidebarData = [
  { title: 'Home', path: '/', icon: faHome },
  { title: 'Notes', path: '/Notes', icon: faStickyNote },
  
  { title: 'About Us', path: 'C:\Users\HP\Desktop\notesapp\app\(root)\AboutUs\page.tsx', icon: faInfoCircle },
];

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  /* Add any other styling properties you want */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background: linear-gradient(to right, #6238F6, #9400d3);
    color: white;
    svg {
      fill: white; /* Change icon color on hover */
    }
  }

  span {
    font-weight: bold;
  }
`;

const Icon = styled.i`
  margin-right: 10px;
  color: #9A96AB;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {sidebarData.map((item) => (
        <SidebarItem key={item.title}>
          <Icon>
            <FontAwesomeIcon icon={item.icon} />
          </Icon>
          <span>{item.title}</span>
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
