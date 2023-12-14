import React, { useState } from 'react'
import { Link } from "react-scroll";
import pic1 from '../images/me1.jpg'
import pic2 from '../images/me3.webp'
import pic3 from '../images/me2.webp'
import pic4 from '../images/me4.jpg'
import pic5 from '../images/me5.jpg'
import {TbArrowLeftCircle} from 'react-icons/tb'
import {TbArrowRightCircle} from 'react-icons/tb'

const Aboutme = () => {
    const backimgs = ['', pic2, pic3, pic1, pic4, pic5]
    const [index,setIndex] = useState(1)
    let img = backimgs[index]
    const [style,setStyle] = useState({ backgroundImage: `url(${img})` })
    
    const checkNumber = (num)=>{
        if(num > backimgs.length - 1){
            return 1
        }
        if(num < 1){
            return backimgs.length - 1
        }return num
    }
    const nextImg = ()=> {
        setIndex((index)=>{
            let val1 = index + 1
            return checkNumber(val1)
        })
        setStyle({ backgroundImage: `url(${img})` })
    }
    const prevImg = ()=>{
        setIndex((index)=>{
            let val = index - 1
            return checkNumber(val)
        })
        setStyle({ backgroundImage: `url(${img})` })
    }
    return (
    <div className='about-me'>
        <h3 className='h3-1 h3-1-1'>ABOUT <span className='span-1'>ME</span></h3>
        <div className="about">
            <div className="side1">
                <p className="job">Phorographer</p>
                <h4>ALECIA <span className='span-3'>LAILSON</span></h4>
                <p className="descreption">My name is Alesia Lail and I am a professional photographer.
                 As a professional photographer, a person who loves his job, during a photosession.</p>
                 <p className="descreption">I help with posing, I will teach you how to stand correctly,
                  show where to put your hands, where to look, how to get slimmer in the photo, tell you 
                  how to cope with stress and many other points that will help you get the maximum from 
                  the photo shoot.</p>
                 <p className="descreption"> Together with me, we will select a cool image and
                  location that will emphasize your advantages. </p>
                  <Link className='li' to='prices' duration={1000} smooth={true}>
                    <button className="book-btn">BOOK A SHOOT</button>
                  </Link>
            </div>
            <div className="side2" style={style}>
            </div>
        </div>
        <div className="btns">
                <div onClick={prevImg} className='btn'><TbArrowLeftCircle className='icon'/></div>
                <span className='num'><span className="up">0{index}</span> / <span className="down">05</span></span>
                <div onClick={nextImg} className='btn'><TbArrowRightCircle className='icon'/></div>
            </div>
    </div>
  )
}

export default Aboutme