import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Thumb from './projects/Thumb.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='container'>
        <Header />
        <div className='thumbs'>
          <Thumb />
        </div>
      </div>
      
    </div>
  );
}

export default App;
