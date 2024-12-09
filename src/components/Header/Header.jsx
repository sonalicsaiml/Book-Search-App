import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Uncover a World of Stories 📖</h2><br />
                <p className='header-text fs-18 fw-3'>Looking for your next adventure, romance, or mystery? Find books based on your interests, get recommendations, and explore detailed reviews. From timeless classics to the latest bestsellers, the perfect book is just a search away!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header