import React from 'react';

const Review = () => {
  const item = [
    {
      name: 'James',
      paragraph:
        'Mojirade is a young and promising virtual human ardent about fashion and entertainment. A solid creation of style, expression and identity in digital fashion.',
    },
    {
      name: 'GLORY',
      paragraph:
        "Hold on, you mean she's virtual? Mojirade looks real and I can't wait to see her life play out in the social space.",
    },
    {
      name: 'PHILLIPA',
      paragraph: "Mojirade is mind-blowing! I can't wait to really see what is coming next.",
    },
    {
      name: 'FESTUS',
      paragraph:
        "Moji is ready to tell brands' stories in the virtual space and you well know she has got the poise.",
    },
  ];
  return (
    <div className='text-center '>
      <div className='bg-gradient-to-r from-black  to-[#000000]'>
        <h3 className='py-10 tracking-widest font-bold'>READ WHAT OTHERS HAVE TO SAY</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-flow-co gap-4 '>
          {item.map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-10 py-3 rounded-xl '
            >
              <h3 className='text-lg py-5'>{item.name}</h3>
              <p className='text-sm leading-7 tracking-wide'>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
