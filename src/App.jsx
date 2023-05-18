import './index.css';
import Header from './components/Header'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Prices from './components/Prices'
import {MdNavigateNext} from 'react-icons/md'

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Aboutme id='about-me'/>
      <Projects id='projects'/>
      <Prices id='prices'/>
      <footer>
        <div className="contact">
          <p className="number">+1 209 333 7777</p>
          <p className="email">alecia.lail@gmail.com</p>
        </div>
        <div className="intouch">
          <p className="touch">Stay in touch</p>
          <label>
            <input type="email" placeholder='Email' className='input'/>
            <button className='next-btn'><MdNavigateNext className='next-icon'/></button>
          </label>
        </div>
        <ul className="social">
          <li className="li1"><a href="https://www.instagram.com/" target='_blank'>Instagram</a></li>
          <li className="li1"><a href="https://telegram.org/" target='_blank'> Telegram</a></li>
          <li className="li1"><a href="https://www.facebook.com/" target='_blank'>Facebook</a></li>
        </ul>
        
      </footer>
    </div>
  );
}

export default App;
