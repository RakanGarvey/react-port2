import React from 'react'
import pro from '../images/pro1.webp'
import white1 from '../images/white1.jpg'
import white2 from '../images/white2.jpg'
import white3 from '../images/white3.webp'
import white4 from '../images/white4.webp'
import red1 from '../images/red1.jpg'
import red2 from '../images/red2.jpg'
import red3 from '../images/red3.jpg'
import red4 from '../images/red4.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='first'>
            <div>
                <h1>HELLO!<br />I'M ALESIA</h1>
                <h2>PHOTOGRAPHER</h2>
            </div>
            <img src={pro} alt="" className='pro'/>
        </div>
        <div className='second'>
            <h3>ABOUT TH<span>E PROJECT</span></h3>
            <div className="about-project">
                <div className="about-title">
                    <span className='span'>ABOUT THE PROJECT</span> <br />
                    <span className='span'>SOLUTION</span><br />
                    <span className='span'>OBJECTIVE</span><br />
                </div>
                <div className="about-desc">
                    <p className='p'>The project is dedicated to photographer. He likes to shoot portraits. 
                        also interested in films, which the style can be seen in his works. 
                        He likes darkness and shadows and implements then into his photos. </p>
                    <p className='p'>As a base use block, white and red colors, high usability gallery, 
                        straight lines in the background to show the simplicity. 
                        Make a minimolistic, individual design and functional design. </p>
                    <p className='p'>Create clean, simple design with a nice typography . 
                        Balance between non - triviality and minimalism. Create clean , 
                        simple design with a nice typography. Balance between non - 
                        triviality and minimalism. </p>
                </div>
            </div>
        </div>
        <div className="third">
            <h3 className='h3-1 h3-1-1'>MOOD<span className='span-1'>BOARD</span></h3>
            <div className="moodboard">
                <div className="white1 mood-img">
                    <img src={white1} alt="" className='board-img'/>
                    <img src={white2} alt="" className='board-img'/>
                </div>
                <div className="white2 mood-img">
                    <img src={white3} alt="" className='board-img'/>
                    <img src={white4} alt="" className='board-img'/>
                </div>
                <div className="red1 mood-img">
                    <img src={red1} alt="" className='board-img'/>
                    <img src={red2} alt="" className='board-img'/>
                </div>
                <div className="red2 mood-img">
                    <img src={red3} alt="" className='board-img'/>
                    <img src={red4} alt="" className='board-img'/>
                </div>
            </div>
        </div>
        <div className="fourth">
        <h3 className='h3-1'>COLORS & <span>TYPOGRAPHY</span></h3>
                <div className="pics">
                    <div className="pic pic1">
                        <div className="clr black"></div>
                    </div>
                    <div className="pic pic2">
                        <div className="clr white"></div>
                    </div>
                    <div className="pic pic3">
                        <div className="clr red"></div>
                        <h3 className='h3-2'>FUT<span>URA</span></h3>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home