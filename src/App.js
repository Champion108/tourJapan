import './App.css';
import Navbar from './molecules/navbar';
import Video from './molecules/video';
import Mainpara from './molecules/mainpara';
import Headtext from './atoms/headtext';
import Slides from './molecules/slides';
import Mvdslides from './molecules/mvdslides';

function App() {
  return (
    <>
    <Navbar className="navbar"></Navbar>
    <Video className="vid"></Video>
    <Mainpara></Mainpara>
    <Headtext 
      heading="Popular in Japan"
      text="Tourism in Japan is dropping on a blend of japanese 
      culture and exceptional advancements in technology, spectacular
      scenic display of vivid colours and best gaming zones, beaches 
      and parks, and a lot more."
    ></Headtext>
    <Slides></Slides>
    <Headtext 
      heading="Must View Destinations"
      text="From futuristic skyline cities to historical wonders come
      and see the best of Japan!!"
    ></Headtext>
     <Mvdslides></Mvdslides>
    </>
  )
}

export default App;
