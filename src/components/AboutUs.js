import React from 'react';

const AboutUs = (props) => {
    return (
        <div className='flex py-5' style={{ background: '#1E1E1E' }}>

            <div className='container mx-14'>

                <div class="grid grid-cols-2">
                    <div className='flex justify-center flex-col text-white'>
                        <p className='text-2xl font-extrabold text-4xl leading-10 font-sans '>About Us</p>
                        <p className='font-normal font-sans text-sm leading-5'>Web3 is constantly evolving and has come very far in a short period of time, however it mostly remains built on dealing with strangers on the internet. This is where Faceless Labs comes in. We aim to build on the trust of 'faceless' strangers, create social contracts and formalize trust within Web3. </p>
                    </div>
                    <div className='flex justify-end'> <img src='/about.png' alt='about' /></div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;