import React from 'react';
import './Navbar.css'; // Importing the CSS file
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className='profile-button' style={{ padding: '21px 21px' }}>
             <UserButton afterSignOutUrl='/' />
        </div>

      <div className="navbar-nav">
      
        
      
        
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/Notes">Notes</a>
        <a className="nav-link"  href="/AboutUs">About Us</a>
      </div>
      
      <form className="form-inline_my-2_my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px' }}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};
