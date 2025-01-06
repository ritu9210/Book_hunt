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
                <h2 className='header-title text-capitalize'>find your next favourite book with just a click!</h2><br />
                <p className='header-text fs-18 fw-3'>Searching for a new book? Look no further! Our platform connects you to the rich world of literature. Discover, learn, and enjoy reading like never before!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header