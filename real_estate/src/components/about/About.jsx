import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/aa.avif"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>At RentKA, we are your dedicated partners in real estate. With a passion for helping you find the perfect home or successfully sell your property, we bring expertise, transparency, and a personalized touch to every transaction. </p>
            <p> Discover the difference of working with a team that prioritizes your goals. Welcome to RentKA, where your real estate journey becomes a seamless and rewarding experience.</p>

            <button className=''>More About Us</button>
          </div>
          {/* <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default About
