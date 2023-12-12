import { useState } from 'react'
import Logo from "./Logo.svg";
import Comprehensive from "./space_1.svg";
import UI from "./ui.svg";
import Navigate from "./navigate.svg";
import Security from "./security.svg";
import Empower from "./empower.svg";
import Discord from "./discord.svg";
import X from "./x.svg";
import Zealy from "./Zealy Logo Mark B&W.svg";
import './App.css'

function App() {

  return (
    <>
    <div className='mobile-menu' style={{justifyContent:"center",alignItems:"center",height:"100%", width:"100%",position:'fixed', display:'flex', backgroundColor:"#100C27",zIndex:"99",flexDirection:"column"}}>
        <div style={{position:"absolute",top:0,width:"100%", height:"50px",textAlign:"right",right:"30px"}} className='section-heading'
        onClick={(e)=>{
            let y =window.document.getElementsByClassName("mobile-menu")[0]
            y.style.transform="translateY(-200%)"
        }}>
          X
        </div>
        <a href="#about" onClick={()=>{
          let y =window.document.getElementsByClassName("mobile-menu")[0]
          y.style.transform="translateY(-200%)"
        }}><h3>ABOUT US</h3></a>
        <a href="#feature" onClick={()=>{
          let y =window.document.getElementsByClassName("mobile-menu")[0]
          y.style.transform="translateY(-200%)"
        }}><h3>FEATURES</h3></a>
        <a href="#socials" onClick={()=>{
          let y =window.document.getElementsByClassName("mobile-menu")[0]
          y.style.transform="translateY(-200%)"
        }}><h3>SOCIALS</h3></a>
        <button className='btn-nav' style={{marginTop:"50px"}}>
                Launch App
          </button>
       
    </div>
     <div className='hero'>
          <nav>
            <div className='log'>
              <img src={Logo} height={"100%"} width={"100%"}/>
            </div>
            <div className='nav-option'>
              <a href="#about"><h3>ABOUT US</h3></a>
              <a href="#feature"><h3>FEATURES</h3></a>
              <a href="#socials"><h3>SOCIALS</h3></a>
            </div>
            <button className='btn-nav'>
                Launch App
            </button>
            <div className='menu-parent' onClick={()=>{
              let y =window.document.getElementsByClassName("mobile-menu")[0]
              y.style.transform="translateY(0%)"
            }}>
            <div className='menu'>
              <div></div>
            </div>
            </div>
          </nav>
          <div className='heading'>
          
              <div className='elevate'>
                ELEVATE YOUR
              </div>
              <div className='trading'>
                 TRADING
              </div>
          </div>
          <div className='scroll'>
            SCROLL
          </div>
     </div>
     <div className='why-us' id="about">
        <div className='section-heading'>
          WHY US?
        </div>
        <div className='section-content'>
          <p>Based Jumper distinguishes itself in the cryptocurrency trading bot market with its comprehensive feature set, enhanced security, user-friendly interface, innovative trading tools, multi-chain and multi-exchange support, and future-proofing capabilities. These features collectively make it a robust and adaptable tool for various types of users in the crypto trading world.</p>
        </div>
     </div>
     <div className='comprehensive' id="feature">
      <div className='image-section'>
        <img src={Comprehensive}/>
      </div>
      <div className='sub-content-section'>
          <div className='section-heading'>
            COMPREHENSIVE SOLUTION
          </div>
          <div className='section-content-no-margin'>
            <p>All-in-One Platform: Based Jumper serves as a one-stop-shop for trading, wallet management, and market analysis, eliminating the need for multiple tools and applications.
            </p>
            <p>
            Continuous Innovation: The platform is continually updated with new features and integrations, keeping users at the forefront of the evolving crypto landscape.
            </p>
          </div>
      </div>
     </div>
     <div className='comprehensive-l'>
      <div className='sub-content-section'>
          <div className='section-heading'>
            EMPOWERING USERS
          </div>
          <div className='section-content-no-margin'>
            <p>
            The platform empowers users to make informed decisions, manage risks, and optimize their trading strategies, much like navigating through the cosmos with a clear map and sophisticated tools.
            </p>
            
          </div>
      </div>
      <div className='image-section'>
        <img src={Empower}/>
      </div>
     </div> 
     <div className='comprehensive'>
      <div className='image-section'>
        <img src={Security}/>
      </div>
      <div className='sub-content-section'>
          <div className='section-heading'>
            SECURITY AND TRUST
          </div>
          <div className='section-content-no-margin'>
            <p>Top-Tier Security: With robust security measures, users can trade and manage their assets with confidence,
knowing their information and funds are secure.</p>
            <p>
            Transparency and Reliability: The platform is continually updated with new features and integrations, keeping users at the forefront of the evolving crypto landscape.            </p>
          </div>
      </div>
     </div>
     <div className='comprehensive-l'>
      
      <div className='sub-content-section'>
          <div className='section-heading'>
          NAVIGATE CRYPTO WITH EASE
                    </div>
          <div className='section-content-no-margin'>
            <p>
            Like a seasoned astronaut navigating through space, Based Jumper guides its users through the complex world of cryptocurrency.            </p>
          </div>
      </div>
      <div className='image-section'>
        <img src={Navigate}/>
      </div>
     </div>
     <div className='comprehensive'>
      <div className='image-section'>
        <img src={UI}/>
      </div>
      <div className='sub-content-section'>
          <div className='section-heading'>
          USER-FRIENDLY INTERFACE
                    </div>
          <div className='section-content-no-margin'>
            <p>
            Intuitive Design: The interface is designed for ease of use,
making complex trading operations simple and accessible
even for beginners.            </p>
            <p>
            Personalized Support: The platform offers personalized support and educational resources, helping users to navigate across DISCORD | TELEGRAM | MOBILE</p>
          </div>
      </div>
     </div>
     <div style={{marginTop:"100px"}}>
        <h1 className='section-heading' id="socials">Connect With Us</h1>
        <div className='socials'>
            <div className='Social-Img' onClick={()=>{
              window.open('https://discord.gg/QqBU5kAn6h')
            }}>
                <img src={Discord}/>
            </div>
            <div className='Social-Img' onClick={()=>{
              window.open('https://zealy.io/c/basedjumper/questboard');
            }}>
              <img src={Zealy}/>
            </div>
            <div className='Social-Img' onClick={()=>{
              window.open('https://x.com/basedjumperbot?s=21&t=X2QEkPkj1NgUGHEH-KBWBQ')
            }}>
              <img src={X}/>
            </div>
        </div>
      </div>
     <footer>
        <div className='links'>
          <div>
            <div className='heading-footer'>USEFUL LINKS </div>
            <div>Telegram Bot</div>
            <div>Buy $JUMPER  </div>
            <div>Revenue Sharing</div>
            <div>Scanner Channel</div>

          </div> 
          <div>
            <div className='heading-footer'>RESOURCES</div> 
            <div>Documentation</div>
            <div>Whitepaper</div>
            <div>Terms & Conditions</div>
            <div>Token Chart</div>
            </div>
          <div >
            <div className='heading-footer'>SOCIALS</div>
            <div onClick={()=>{
              window.open('https://x.com/basedjumperbot?s=21&t=X2QEkPkj1NgUGHEH-KBWBQ')
            }}>Twitter</div>
            <div onClick={()=>{
              window.open('https://discord.gg/QqBU5kAn6h')
            }}>Discord</div>
            <div onClick={()=>{
              window.open('https://zealy.io/c/basedjumper/questboard');
            }}>Zealy</div>
          </div>
        </div>
        <div className='disclaimer'>
            <div style={{textAlign:"left", color:"white"}}>
              <div style={{height:"70px", width:"70px", margin:"2px auto"}}>
                <img src={Logo} width={"100%"} height={"100%"}/>
              </div>
              <h3>DISCLAIMER</h3>
            </div>
            <div>
              <p style={{maxWidth:"500px"}}>By accessing our services, you accept our Privacy Policy and Terms of Service. While our tools are provided free of charge, please note that each transaction incurs a 0.5% - 1% fee.</p>
            </div>
        </div>
        <div style={{position:"absolute", bottom:0, marginBottom:"20px", textAlign:"center", width:"100%", color:"white"}}>
            &copy; {new Date().getFullYear()} BasedJumper. All Rights Reserved.
        </div>
     </footer>
    </>
  )
}

export default App
