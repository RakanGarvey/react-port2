import React from 'react'

const Prices = () => {
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
                <button className="book-btn">BOOK A SHOOT</button>
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
                <button className="book-btn">BOOK A SHOOT</button>
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
                <button className="book-btn">BOOK A SHOOT</button>
            </div>
        </div>
    </div>
  )
}

export default Prices