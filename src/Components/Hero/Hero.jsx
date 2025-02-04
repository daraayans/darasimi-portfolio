import React from 'react'
import './Hero.css'
import profile_img from '../../assets/passport.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Oluwadarasimi Ayanlaja</span></h1>
      <h1><em>Digital Craftsman (Developer/Photographer/Creator).</em></h1>
      <p >I'm a Nigerian Front-End Developer Major, Photographer and a visual creator building my version of the digital world one step at a time. All coding projects are built from the ground up, from planning and designing all the way to solving real-life problems with code.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
