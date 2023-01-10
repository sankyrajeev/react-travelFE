import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-background.mp4" autoPlay loop muted />
      <h1> AWAITING YOUR NEXT ADVENTURE</h1>
      <p>What are your waiting for?</p>
      <div className="hero-btn">
        <Link to="/sign-up" > <button type="button" class="btn btn-outline btn-lg start">GET STARTED!</button></Link>

        <Link to="/sign-up" ><button type="button" class="btn btn-outline btn-lg watch">WATCH TRAILER <i className='far fa-play-circle' /></button> </Link>
      </div>

    </div>
  );
}

export default HeroSection;
