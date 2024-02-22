import React from 'react';
import img2 from '../img/R.jpg';
import img4 from '../img/wp4331305.jpg';
import img3 from '../img/276590.jpg';
import img5 from '../img/R (1).jpg';
import img6 from '../img/3227293fb65326cb3c7a8fc5639bbc0f.jpg';
import './slides.css'

export default function Slides(props){ 
   

   const readmore = (ind) => {
      let s = document.getElementsByClassName("txt-hid")[ind];
        if(s.style.display === "block")
        s.style.display = "none";
        else
        s.style.display = "block";
        let y= document.getElementsByClassName('rm-btn')[ind];
       if( y.innerHTML ==="Read Less")
          y.innerHTML = "Read More";
        else
        y.innerHTML = "Read Less";
    };

    const bringSlide = (ind) => {
      
      let old = document.getElementsByClassName("slide-active")[0];
      old.classList.remove("slide-active");
      

      let s = document.getElementsByClassName("slide-btn")[ind];
      s.classList.add("slide-active"); 

      let k = document.getElementsByClassName("slided")[0];
      let x = 100 * ind;
      let fin = "-"+x+"%";
      k.style.left = fin;
    };

   return(
        <section className='slides'>
            
          <div className='slided'>

            <div className='slide-cont'>
               <img alt="slide1" src={img2} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Hiroshaki castle</h1>
                  <p className='txt'>Hirosaki Castle, located in Hirosaki City, Aomori Prefecture, Japan, is a historic landmark renowned for its stunning cherry blossom
                   displays and elegant architecture. Originally constructed in the early 17th century, Hirosaki Castle served as a strategic military stronghold during 
                   Japan's feudal era. </p><p className='txt-hid'> Surrounded by a picturesque moat and situated within expansive park grounds, the castle complex boasts a distinctive three-story keep
                   adorned with traditional Japanese roof tiles and intricate wooden carvings. 
                   Visitors flock to the castle grounds, especially during the cherry blossom season, to admire the breathtaking scenery and immerse themselves in Japan's rich cultural heritage.</p>
                  <div className='rm-btn' onClick={() => readmore(0)}>Read More</div>
               </div>
            </div>

            <div className='slide-cont'>
               <img alt="slide2" src={img3} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Kyoto</h1>
                  <p className='txt'>Kyoto, a city steeped in history and culture, offers a plethora of captivating experiences. Start your journey by marveling at the magnificent Golden Pavilion (Kinkaku-ji), a Zen Buddhist temple adorned with gold leaf.
                   Visit Daitoku-ji and Wander through the peaceful grounds and immerse yourself in the contemplative atmosphere.  </p>
                  <p className='txt-hid'> Wander through the peaceful grounds and immerse yourself in the contemplative atmosphere.Other highlights include Kiyomizu-dera,and various exquisite Japanese gardens like Ryōan-ji, Tenryū-ji, and Kodai-ji.
                  </p>
                  <div className='rm-btn' onClick={() => readmore(1)}>Read More</div>
               </div>
            </div>
            
            <div className='slide-cont'>
               <img alt="slide2" src={img4} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Tokyo</h1>
                  <p className='txt'>Tokyo, the vibrant and futuristic metropolis, is a captivating blend of ancient temples nestled among modern skyscrapers.Tokyo is a city of contrasts—where tradition meets 
                   innovation, and cherry blossoms bloom alongside futuristic neon lights. </p><p className='txt-hid'> Immerse yourself in Tokyo’s vibrant neighborhoods, savor local cuisine, and explore the city’s modern and traditional facets. Enjoy your Tokyo adventure! 
                  </p>
                  <div className='rm-btn' onClick={() => readmore(2)}>Read More</div>
               </div>
            </div>

            <div className='slide-cont'>
               <img alt="slide2" src={img5} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Mount Fuji</h1>
                  <p className='txt'>Mount Fuji, a towering 3,765-meter-high volcano, is iconic to Japan. Start your exploration by heading to the Arakura Fuji Sengen Jinja Shrine. Climb the steps through charming woodland to reach the pretty red shrine.
                    Feel the truly extraordinary the Chureito Pagoda, one of the most iconic spots in Japan.</p><p className='txt-hid'> Exploring the five lakes at the base of Mount Fuji is a must: Lake Shōji, Lake Motosu, Lake Saiko, Lake Yamanaka, and Kawaguchiko. 
                  </p>
                  <div className='rm-btn' onClick={() => readmore(3)}>Read More</div>
               </div>
            </div>

            <div className='slide-cont'>
               <img alt="slide2" src={img6} className="slide"></img>
               <div className='card'>
                  <h1 className='tlt'>Shiga Agricultural Park</h1>
                  <p className='txt'>Shiga Agricultural Park Blumen Hugel in Hino, Shiga Prefecture, offers a delightful blend of natural beauty, German-inspired architecture, and interactive experiences.  Imagine approximately 130,000 flowers, including 125 varieties of tulips, all in full bloom.
                  The landscape, reminiscent of a German townscape, provides a picturesque setting for your exploration. </p>
                  <p className='txt-hid'> Whether you’re admiring flowers, petting animals, or savoring local cuisine, Blumen Hugel Farm offers a unique escape from daily life. Experience the magic of a dairy farm surrounded by beauty and tranquility!
                  </p>
                  <div className='rm-btn' onClick={() => readmore(4)}>Read More</div>
               </div>
            </div>

          </div>

            <div className='slide-btns'>
                <div className='slide-btn slide-active' onClick={()=>{bringSlide(0)}}></div>
                <div className='slide-btn' onClick={()=>{bringSlide(1)}}></div>
                <div className='slide-btn' onClick={()=>{bringSlide(2)}}></div>
                <div className='slide-btn' onClick={()=>{bringSlide(3)}}></div>
                <div className='slide-btn' onClick={()=>{bringSlide(4)}}></div>
            </div>

        </section>
   );
};