import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-container">
          <div className="footer-container1">
            <span className="footer-text">Infinite Imagine</span>
            <span>
              <span>
                Copyright © 2023
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </div>
          <div className="footer-container2">
            <div className="footer-container3">
              <span className="footer-text04 Large">Company</span>
              <span className="footer-text05 Large">About Us</span>
              <span className="footer-text06 Large">Careers</span>
              <span className="footer-text07 Large">Press</span>
            </div>
            <div className="footer-container4">
              <span className="footer-text08 Large">Pages</span>
              <span className="footer-text09 Large">Login</span>
              <span className="footer-text10 Large">Register</span>
              <span className="footer-text11 Large">About</span>
            </div>
            <div className="footer-container5">
              <span className="footer-text12 Large">Products</span>
              <span className="footer-text13 Large">Free</span>
              <span className="footer-text14 Large">PRO</span>
              <span className="footer-text15 Large">Latest</span>
            </div>
          </div>
        </div>
        <img alt="image" src="/waves-white.svg" className="footer-image" />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container2 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text04 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text05 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text05:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text06 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text06:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text07:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text08 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text09 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text09:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text10 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text10:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text11 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text11:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text13 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text13:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text14 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text14:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text15 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text15:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container4 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .footer-container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
