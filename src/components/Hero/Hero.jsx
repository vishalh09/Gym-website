import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"


function Hero(){
    return(
        <>
        <div className="hero">
            <div className="left-h">
              <Header/>

{/* ad */ }
              <div className="the-best-ad">
                <div></div>
                <span>EXPERIENCE THE FITNESS WAVE</span>
              </div>

{/* hero heading */ }  
             <div className="hero-text">
                <div>
                  <span className="stroke-text">#safe</span>
                  <span> sweet space</span>
                </div>
               
               <div>
                <span>ideal body</span>
               </div>
               <div>
                <span>YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. Strength training with top equipment</span>
               </div>
             </div>

{/* figures */ } 
           <div className="figures">
            <div>
                <span>+ 140</span>
                <span>EXPERT COACHES</span>
            </div>
            <div>
                <span>+ 978</span>
                <span>MEMBERS JOINED</span>
            </div>
            <div>
                <span>+ 50</span>
                <span>FITNESS PROGRAMS</span>
            </div>
           </div>

           <div className="hero-btn">
            <button className="btn"> Get Started</button>
            <button className="btn"> Learn More</button>
           </div>
            </div>

            <div className="right-h">
              <button className="btn">Join Now</button>

               <div className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span> <span>116 BPM</span>
               </div>

               <img src={hero_img} alt="" className="hero-img"/>
               <img src={hero_img_back} alt=""className="hero-img-back"/>

               <div className="calories">
                <img src={Calories} alt="" />
                <div>
                  <span>Calories Burnt</span>
                <span>240 Kcal</span>
                </div>
                
               </div>
            </div>
        </div>
        </>
    )
}

export default Hero