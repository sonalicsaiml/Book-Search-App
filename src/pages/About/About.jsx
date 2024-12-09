import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub – Your Gateway to a World of Books 🌍</p>
            <p className='fs-17'>From gripping thrillers to insightful non-fiction, BookHub connects you to a vast collection of books. Discover your next read with ease and join a community of passionate readers.</p>
            <p className='fs-17'> Search & Discover: Find books based on genre, author, or title.
 Create Your Booklist: Track your reading, save your favorites, and organize your to-read list.
 Join the Booklover’s Network: Share recommendations, write reviews, and connect with readers globally.</p>
            <p className='fs-17'>Start your book journey today at BookHub—where every reader belongs!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
