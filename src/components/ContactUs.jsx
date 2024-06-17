import React from 'react';
import Image from 'next/image';
import Partners from '../../public/images/Partners.png';

const ContactUs = () => {
  return (
    <div className=' text-center'>
      <div>
        <div className=' my-20  border-y-2 border-[#555454] py-5 w-full'>
          <div className=''>
            <h1 className='text-[14px] sm:text-[4.5rem] font-bold tracking-widest'>CONTACT US</h1>
            <button className='border border-[#555454] rounded-3xl buttonx-10 py-4 px-5 my-5 text-sm tracking-widest '>
              We welcome collaboration and partnership. Let's connect!
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='py-10 tracking-widest font-bold'>OUR TRUSTED PARTNERS</h2>
          <div className=''>
            <Image
              src={Partners}
              alt='image'
              className='bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
