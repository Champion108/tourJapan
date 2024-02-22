import './App.css';
import Navbar from './molecules/navbar';
import Video from './molecules/video';
import Mainpara from './molecules/mainpara';
import Headtext from './atoms/headtext';
import Slides from './molecules/slides';

function App() {
  return (
    <>
    <Navbar className="navbar"></Navbar>
    <Video className="vid"></Video>
    <Mainpara></Mainpara>
    <Headtext></Headtext>
    <Slides></Slides>
    </>
  )
}

export default App;
