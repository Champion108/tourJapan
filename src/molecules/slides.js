import React from 'react';
import img2 from '../img/R.jpg';
import img3 from '../img/wp4331305.jpg';
import './slides.css'


export default function Slides(props){ 
   return(
        <section className='slides'>

            <div className='slide-cont'>
               <img alt="slide1" src={img2} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Hiroshaki castle</h1>
                  <p className='txt'>Hirosaki Castle, located in Hirosaki City, Aomori Prefecture, Japan, is a historic landmark renowned for its stunning cherry blossom
                   displays and elegant architecture. Originally constructed in the early 17th century, Hirosaki Castle served as a strategic military stronghold during 
                   Japan's feudal era. Surrounded by a picturesque moat... </p><p className='txt-hid'> and situated within expansive park grounds, the castle complex boasts a distinctive three-story keep
                   adorned with traditional Japanese roof tiles and intricate wooden carvings. Despite undergoing restoration over the years, Hirosaki Castle retains its 
                   original charm and remains an iconic symbol of regional pride.
                   Visitors flock to the castle grounds, especially during the cherry blossom season, to admire the breathtaking scenery and immerse themselves in Japan's rich cultural heritage.</p>
                  <div className='rm-btn'>Read More</div>
               </div>
            </div>
            
            <div className='slide-cont'>
               <img alt="slide2" src={img3} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Tokyo</h1>
                  <p className='txt'>Tokyo, the vibrant and futuristic metropolis, is a captivating blend of ancient temples nestled among modern skyscrapers.Tokyo is a city of contrasts—where tradition meets 
                   innovation, and cherry blossoms bloom alongside futuristic neon lights... </p><p className='txt-hid'> and situated within expansive park grounds, the castle complex boasts a distinctive three-story keep
                   adorned with traditional Japanese roof tiles and intricate wooden carvings. Despite undergoing restoration over the years, Hirosaki Castle retains its 
                   original charm and remains an iconic symbol of regional pride.
                   Visitors flock to the castle grounds, especially during the cherry blossom season, to admire the breathtaking scenery and immerse themselves in Japan's rich cultural heritage.</p>
                  <div className='rm-btn'>Read More</div>
               </div>
            </div>

        </section>
   );
};