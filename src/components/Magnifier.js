import React,{useState,useEffect} from 'react'
import imgUrl from '../images/home.jpg';
import Navbar from './Navbar';


const Magnifier = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };
  return (<>
    <Navbar/>
    <div
    className="relative"
    onMouseEnter={() => setShowMagnifier(true)}
    onMouseLeave={() => setShowMagnifier(false)}
    onMouseMove={handleMouseMove}
  >
    <img className="w-full h-[100vh] bg-cover" src={imgUrl} alt="" />

    {showMagnifier && (
      <div
        style={{
          position: "absolute",
          left: `${cursorPosition.x - 100}px`,
          top: `${cursorPosition.y - 100}px`,
          pointerEvents: "none",
        }}
      >
        <div
          className="w-[100px] h-[100px] rounded-[50%] border-white border-[2px]"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      </div>
    )}
    
  </div>
  
  </>
);
  
}

export default Magnifier