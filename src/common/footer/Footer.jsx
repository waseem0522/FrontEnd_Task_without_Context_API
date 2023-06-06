import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Codistan</h1>
            <p>We're passionate about innovation, brilliant ideas and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>We are Student</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>6343 N Sacramento Ave 2w, Chicago, IL 60659 </li>
              <li>Email: saad.habib@codistan.org</li>
              <li>Phone: +923235676207 </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
