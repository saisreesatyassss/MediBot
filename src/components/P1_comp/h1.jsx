import React from 'react';
import '../styles.css';

const H1 = () => {
  return (
    <div className='bg-blue py-3'>
        {/* text */}
        <div className='py-4 col-8 mx-auto my-5 mb-4 d-flex flex-column text-center'>
            <h6 className='text-primary fw-bold sub-head'>Find your dream</h6>
            <h1 className='head mb-4'>Empowering your well-being with personalised solutions <span className='grad'>MediBot!</span></h1>
            <h6 className='body col-10 mx-auto'>Our platform is dedicated to helping you discover, apply, and succeed in your dream career.
                MediBot, where opportunities meet ambition.</h6>
        </div>
    </div>
  )
}

export default H1