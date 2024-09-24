import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <footer>
      <div className="ft">
        <div className="ft1 fw"><h4>Company</h4>
        <ul className="fc">
          <li className="ft1-1">About Us</li>
          <li className="ft1-2">Contact Us</li>
        </ul></div>

        <div className="ft2 fw"><h4>Products</h4>
        <ul className="fc">
          <li className="ft2-1">Survey Solution</li>
          <li className="ft2-2">Workshop Automation System</li>
        </ul></div>

        <div className="ft3 fw"><h4>Connect with us</h4>
        <span className="ft3-1 fc">
          <img src="facebook.png" alt="" style={{width:"30px"}}/>
          <img src="youtube.png" alt="" style={{width:"30px"}}/>
          <img src="linkedin.png" alt="" style={{width:"30px"}}/>
        </span></div>

        <div className="ft4 fw"><h4>Services</h4>
          <ul className="fc">
            <li className="ft4-1">Product Solution</li>
            <li className="ft4-2">Web Design</li>
          </ul></div>

       
      </div>
      <div className="footer2"><p>© 2017 Code-X Technologies. All rights reserved.</p></div>
    </footer>
    </div>
  )
}

export default Footer