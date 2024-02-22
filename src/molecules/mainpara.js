import React from 'react';
import './mainpara.css'

export default function Video(){ 

    const fullread = () =>{      
        let x= document.getElementById('hidden-para');
        if(x.style.display === "block")
        x.style.display = "none";
        else
        x.style.display = "block";
        let y= document.getElementsByClassName('link-btn')[0];
       if( y.innerHTML ==="Read Less")
          y.innerHTML = "Read More";
        else
        y.innerHTML = "Read Less";
    }

   return(
        <section className='main-para'>
            <div className='main-para-2'>
                <div className='mainpara'>
                    <p className='text'>Japan is a wonderful destination for travelers who want to experience a unique and diverse culture, history, and nature. 
                    Whether you are interested in exploring the ancient temples and shrines, tasting the delicious cuisine, or enjoying the scenic beauty of the 
                    mountains and islands, Japan has something for everyone. You can also learn more about the modern and innovative side of Japan, such as its
                    technology, fashion, and entertainment. Japan is a safe and friendly country, where you can easily get around by public transportation or 
                    rent a car. You will also find many opportunities to interact with the locals and learn about their customs and traditions. Japan is waiting
                    for you, so don’t miss this chance to visit one of the most amazing countries in the world.</p>
                    <p className='text' id="hidden-para">Japan is a wonderful destination for travelers who want to experience a unique and diverse culture, history, and nature. 
                    Whether you are interested in exploring the ancient temples and shrines, tasting the delicious cuisine, or enjoying the scenic beauty of the 
                    mountains and islands, Japan has something for everyone. You can also learn more about the modern and innovative side of Japan, such as its
                    technology, fashion, and entertainment. Japan is a safe and friendly country, where you can easily get around by public transportation or 
                    rent a car. You will also find many opportunities to interact with the locals and learn about their customs and traditions. Japan is waiting
                    for you, so don’t miss this chance to visit one of the most amazing countries in the world.</p>
                </div>
                <button className='link-btn' onClick={fullread}>Read More</button>
            </div>
        </section>
   );
};