import './App.css';
import Navbar from './molecules/navbar';
import Video from './molecules/video';
import Mainpara from './molecules/mainpara';
import Headtext from './atoms/headtext';

function App() {
  return (
    <>
    <Navbar className="navbar"></Navbar>
    <Video className="vid"></Video>
    <Mainpara></Mainpara>
    <Headtext></Headtext>
    </>
  )
}

export default App;
