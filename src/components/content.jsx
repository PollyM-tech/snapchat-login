import React from 'react'

export default function BodyContent() {
    return (
      <div className='right-section'>
          <div className='scroll-area'>
            <div className='hero-box'>
              <img src="/snappic.png" alt="Slogan" className='slogan-image' />
              <img src="/peps.png" alt="People collage" className='people-image' />
            </div>
            <div className='middle-content'>
              <div className="div1">
                <div>
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">Snap Inc.</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">News</a></li>
                  </ul>
                </div>
                <div>
                  <h4>Language</h4>
                  <select name="" id="">
                    <option value="en(uk)">English (UK)</option>
                  </select>
                </div>
              </div>

              <div className="div2">
                <h4>Community</h4>
                <ul>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Community Guidelines</a></li>
                  <li><a href="#">Safety Centre</a></li>
                </ul>
              </div>

              <div className="div3">
                <h4>Advertising</h4>
                <ul>
                  <li><a href="#">Buy Adverts</a></li>
                  <li><a href="#">Advertising Policies</a></li>
                  <li><a href="#">Political Ads Library</a></li>
                  <li><a href="#">Brand Guidelines</a></li>
                  <li><a href="#">Promotions Rules</a></li>
                </ul>
              </div>

              <div className="div4">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Centre</a></li>
                  <li><a href="#">Your Privacy Choices</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Report Infringement</a></li>
                  <li><a href="#">Custom Creative Tools Terms</a></li>
                  <li><a href="#">Community Geofilter Terms</a></li>
                  <li><a href="#">Lens Studio Terms</a></li>
                </ul>
              </div>
            </div>
            <div className='footer-placeholder'>
              <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
  
  


