import {React} from 'react'
import Mvdcard from '../atoms/mvdcard';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import './mvdslides.css'
import img from '../img/takayama.webp'
import img1 from '../img/tokyo.jpg'
import img2 from '../img/kyoto.jpg'
import img3 from '../img/hiroshima.jpg'
import img4 from '../img/kamakura.jpg'
import img5 from '../img/ishigaki.jpg'
import img6 from '../img/hakune.webp'
import img7 from '../img/nara.jpg'
import img8 from '../img/1.jpg'
import img9 from '../img/nikko-bridge.jpg'


export default function headtext(){
     
      let lft = 0;

      const next = () => {
        if(lft!== 150){
        lft= lft+25;
        let f = document.getElementsByClassName('mvdslides')[0];
        f.style.left = "-"+lft+"%";
        let h= document.getElementsByClassName("mvdicons")[0];
        h.style.color = "#5a5a5a";
        }
        else{
          let f= document.getElementsByClassName("mvdicons")[1];
          f.style.color = "#adadad";
        }
      }

      const prev = () =>{
        if(lft !== 0){
        lft= lft-25;
        let f = document.getElementsByClassName('mvdslides')[0];
        f.style.left = "-"+lft+"%";
        
        let h= document.getElementsByClassName("mvdicons")[1];
        h.style.color = "#5a5a5a";
        }
        else{
          let f= document.getElementsByClassName("mvdicons")[0];
          f.style.color = "#adadad";
        }
      }
     
        return(
            <div className="mvdcont">
            <MdNavigateBefore className='mvdicons' onClick={prev}/>
            <div className='mvdslider'>
            <div className='mvdslides'>
                <Mvdcard className="ger" 
                image ={img}
                head="Takayama"
                para="Tucked away among the northern 
                Japanese Alps, the small city of Takayama was until relatively, 
                one of the Japan's best kept secrets."/>
                <Mvdcard className="ger"
                image ={img1}
                head="Tokyo"
                para="Lying at the center of world's most populous meteropolitian area.
                 Japan's fusturistic capital is an exhilarating place to explore."/>
                <Mvdcard className="ger"
                image ={img2}
                head="Kyoto"
                para="Widely regarded as the most beautiful city in Japan, Kyoto is a treat to visit.
                It sports over 2000 shinto shrines and buddhist temples."/>
                <Mvdcard className="ger"
                image ={img3}
                head="Hiroshima"
                para=" The city linked with atomic bomb drop, is now a bustling city full of life
                seeming as a gateway to the famous Miyajima Shrine."/>
                <Mvdcard className="ger"
                image ={img4}
                head="Kamakura"
                para="Set on the scenic shores of Sagami Bay with forest-coated hills surrounding it,
                Kamkura is a top rated destination and plethora of beautiful temples and shrines."/>
                <Mvdcard className="ger"
                image ={img5}
                head="Ishigaki"
                para="Located at Okinawa, Ishigaki is Japan's premier beach destination and
                makes a good base to explore the islands in the Yaeyana archipelago."/>
                <Mvdcard className="ger"
                image ={img6}
                head="Hakune"
                para="Boasting beautiful mountain scenery, relaxing hot springs, and
                world class art museums, Hakune is one of the most popular tourist sites in Japan."/>
                 <Mvdcard className="ger"
                image ={img7}
                head="Nara"
                para="Considered to be the birth-place of Japanese civilization, this ancient former capital has a wealth of historic sites, 
                including the famous Todai-ji temple."/>
                <Mvdcard className="ger"
                image ={img8}
                head="Kanazawa"
                para="In between the wildwaters of the sea of Japan and the towering Japanese Alps, Kanzawa boasts
                centuries old castles and well preserved Samurai districts."/>
                <Mvdcard className="ger"
                image ={img9}
                head="Nikko"
                para="Tucked away among mountains with forests all around it, Nikko is home to lot of impressive Shinto 
                Shrines and Buddhist temples."/>
            </div>
            </div>
            <MdNavigateNext className='mvdicons' onClick={next}/>
            </div>
        );
}