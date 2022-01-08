import { useState } from 'react'
import Header from './Header/Header.js';
import Slider from './Slider/Slider.js';
import Sidebar from './Sidebar/Sidebar.js';
import Thumb from './projects/Thumb.js';
import './App.css';

function App() {
  const [overflow, setOverflow] = useState(false)

  const clickHandler = () => {
    !overflow ? setOverflow(true) : setOverflow(false)
  }
  return (
    <div className="App">
      <Sidebar />
      <div className={`container ${!overflow ? 'hidden' : 'scroll'}`}>
        <Header handleClick={clickHandler} />
        <Slider overflow={overflow} />
        <div className='thumbs'>
          <Thumb overflow={overflow} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
