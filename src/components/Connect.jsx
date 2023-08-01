import React from 'react'
import { social } from "../data";

const Connect = () => {
  return (
    <div  className="contact" id='Contect'>
      <h2 className="title">Contact me</h2>
      <div className='contact-content'>
      <h4>Would you like to contact me ? Awesome!!</h4>
        <button className="btn3">
          <a href="https://wa.me/+201201834720">My - WhatsApp</a>
          </button>
          <div className='contact-links'>
          {social.map((link) => {
            let { id, url, icon }=link ;
            return(
              <div key={id} className="link">
              <a  target="blank" href={url}>{icon}</a>
            </div>
            )
          })}
          </div>
        
      </div>

    </div>
  )
}

export default Connect