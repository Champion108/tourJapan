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
                    <p className='text' id="hidden-para">Come lose yourself in Japan's mosaic of cultural wonders and natural splendors.
                    Wander the historic streets of Nara, where deer roam freely amidst ancient temples, or ascend Mount Fuji's legendary 
                    slopes for a sunrise like no other. Find tranquility in the moss-covered gardens of Kanazawa or marvel at the futuristic 
                    skyline of Osaka. Let the rhythm of taiko drums stir your soul and the delicate flavors of matcha tea tantalize your taste buds.
                    From the serenity of rural villages to the dynamic energy of metropolitan hubs, Japan's allure is boundless. 
                    So pack your bags and embark on a journey of unforgettable moments and timeless memories in the Land of the Rising Sun.</p>
                </div>
                <button className='link-btn' onClick={fullread}>Read More</button>
            </div>
        </section>
   );
};