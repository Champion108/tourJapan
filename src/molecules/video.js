import React, { useRef } from 'react';
import image1 from '../img/hero.mp4'
import { IoIosPlay } from "react-icons/io";
import './video.css'

export default function Video(){ 
   
    const videoRef = useRef(null);

   function fullmode(){
      const videoElement = videoRef.current;

      if (videoElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoElement.requestFullscreen();
      }
    }
   }

   return(
        <section className='video-box'>
            <div className='video'>
            <video ref={videoRef} preload="auto" autoplay="autoplay" muted="muted" loop="loop" className='main-video'> 
			    <source src={image1} />
		    </video>
            </div>
            <div className='play-button' onClick={fullmode}>
                <IoIosPlay  className='play-icon-main'/>
            </div>
        </section>
   );
};