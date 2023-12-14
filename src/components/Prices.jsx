import React from 'react'
import { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";


const Prices = () => {
    const [showBooking, setShowBooking] = useState(false);
    const [showBookingStan, setShowBookingStan] = useState(false);
    const [showBookingPre, setShowBookingPre] = useState(false);

    const openBookingContainer = () => {
      setShowBooking(true);
    };
    const closeBookingContainer = () => {
      setShowBooking(false);
    };

    const openBookingContainerStan = () => {
        setShowBookingStan(true);
      };
      const closeBookingContainerStan = () => {
        setShowBookingStan(false);
      };

      const openBookingContainerPre = () => {
        setShowBookingPre(true);
      };
      const closeBookingContainerPre = () => {
        setShowBookingPre(false);
      };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Add your form submission logic here
      // After successful submission, you can close the booking container
      closeBookingContainer();
    };

  return (
    <div className='prices'>
        <h3 className='h3-1 h3-1-1'>PRI<span className='span-1'>CES</span></h3>
        <div className="plans">
            <div className="lite">
                <h3 className='h3_3'>LITE</h3>
                <p className="price">150$</p>
                <div className="details">
                    <div className="names">
                        <p className="det-name">Duration</p>
                        <p className="det-name">Number of photos</p>
                        <p className="det-name">Processing time</p>
                        <p className="det-name">Detailed retouching</p>
                    </div>
                    <div className="quan">
                        <p className="det-quan">1 hour</p>
                        <p className="det-quan">20-30</p>
                        <p className="det-quan">10 days</p>
                        <p className="det-quan">5 items</p>
                    </div>
                </div>
                <button className="book-btn" onClick={openBookingContainer}>BOOK A SHOOT</button>
                {/* Overlay for darkening the background */}
                {showBooking && <div className="overlay" onClick={closeBookingContainer}></div>}

                {/* Booking container */}
                {showBooking && (
                <div className="booking-container">
                    <span className="close-btn" onClick={closeBookingContainer}>
                      <IoCloseCircle style={{ fontSize: "25px"}}/>
                    </span>
                    <h2 style={{color: 'black'}}>Enter Your Information</h2>

                    <form onSubmit={handleFormSubmit} className='booking-form'>
                    {/* Add your input fields for client information here */}
                    <label htmlFor="name" style={{textAlign: 'start', fontSize: '15px'}}>Name:<br />
                    <input type="text" id="name" name="name" className='book-input' required /><br />
                    </label><br />

                    <label htmlFor="email" style={{textAlign: 'start'}}>Email:<br />
                    <input type="email" id="email" name="email" className='book-input' required />
                    </label><br />

                    <label htmlFor="phone" style={{textAlign: 'start'}}>Phone:<br />
                    <input type="tel" id="phone" name="phone" className='book-input' required /><br />
                    </label><br />
                    <label htmlFor="text" style={{textAlign: 'start'}}>Plan: <br />
                    <input type="text" id="text" name="text" className='book-input' required value={'LITE'}/><br />
                    </label><br />
                    <button type="submit" className='close-btn'>Book</button>
                    </form>
                </div>
                )}
            </div>
            <div className="standard">
                <h3 className='h3_3'>STANDART</h3>
                <p className="price">250$</p>
                <div className="details">
                    <div className="names">
                        <p className="det-name">Duration</p>
                        <p className="det-name">Number of photos</p>
                        <p className="det-name">Processing time</p>
                        <p className="det-name">Detailed retouching</p>
                    </div>
                    <div className="quan">
                        <p className="det-quan">2 hour</p>
                        <p className="det-quan">40-50</p>
                        <p className="det-quan">15 days</p>
                        <p className="det-quan">15 items</p>
                    </div>
                </div>
                <button className="book-btn" onClick={openBookingContainerStan}>BOOK A SHOOT</button>

                {showBookingStan && <div className="overlay" onClick={closeBookingContainerStan}></div>}

                {/* Booking container */}
                {showBookingStan && (
                <div className="booking-container">
                    <span className="close-btn" onClick={closeBookingContainerStan}>
                      <IoCloseCircle style={{ fontSize: "25px"}}/>
                    </span>
                    <h2 style={{color: 'black'}}>Enter Your Information</h2>

                    <form onSubmit={handleFormSubmit} className='booking-form'>
                    {/* Add your input fields for client information here */}
                    <label htmlFor="name" style={{textAlign: 'start', fontSize: '15px'}}>Name:<br />
                    <input type="text" id="name" name="name" className='book-input' required /><br />
                    </label><br />

                    <label htmlFor="email" style={{textAlign: 'start'}}>Email:<br />
                    <input type="email" id="email" name="email" className='book-input' required />
                    </label><br />

                    <label htmlFor="phone" style={{textAlign: 'start'}}>Phone:<br />
                    <input type="tel" id="phone" name="phone" className='book-input' required /><br />
                    </label><br />
                    <label htmlFor="text" style={{textAlign: 'start'}}>Plan: <br />
                    <input type="text" id="text" name="text" className='book-input' required value={'STANDART'}/><br />
                    </label><br />

                    <button type="submit" className='close-btn'>Book</button>
                    </form>
                </div>
                )}
            </div>
            <div className="premium">
                <h3 className='h3_3'>PREMIUM</h3>
                <p className="price">400$</p>
                <div className="details">
                    <div className="names">
                        <p className="det-name">Duration</p>
                        <p className="det-name">Number of photos</p>
                        <p className="det-name">Processing time</p>
                        <p className="det-name">Detailed retouching</p>
                    </div>
                    <div className="quan">
                        <p className="det-quan">5 hour</p>
                        <p className="det-quan">all</p>
                        <p className="det-quan">20 days</p>
                        <p className="det-quan">half</p>
                    </div>
                </div>
                <button className="book-btn" onClick={openBookingContainerPre}>BOOK A SHOOT</button>

                {showBookingPre && <div className="overlay" onClick={closeBookingContainerPre}></div>}

                {/* Booking container */}
                {showBookingPre && (
                <div className="booking-container">
                <span className="close-btn" onClick={closeBookingContainerPre}>
                  <IoCloseCircle style={{ fontSize: "25px"}}/>
                </span>
                <h2 style={{color: 'black'}}>Enter Your Information</h2>

                <form onSubmit={handleFormSubmit} className='booking-form'>
                {/* Add your input fields for client information here */}
                <label htmlFor="name" style={{textAlign: 'start', fontSize: '15px'}}>Name:<br />
                <input type="text" id="name" name="name" className='book-input' required /><br />
                </label><br />

                <label htmlFor="email" style={{textAlign: 'start'}}>Email:<br />
                <input type="email" id="email" name="email" className='book-input' required />
                </label><br />

                <label htmlFor="phone" style={{textAlign: 'start'}}>Phone:<br />
                <input type="tel" id="phone" name="phone" className='book-input' required /><br />
                </label><br />
                <label htmlFor="text" style={{textAlign: 'start'}}>Plan: <br />
                <input type="text" id="text" name="text" className='book-input' required value={'PREMIUM'}/><br />
                </label><br />

                <button type="submit" className='close-btn'>Book</button>
                </form>
            </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Prices