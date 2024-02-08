import React from 'react'
import Service from './service';

const WelcomeNote = () => {
    const backgroundStyle = {
        backgroundImage: `url("/welcome.png")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:"max-content",
    };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3" style={backgroundStyle} >
      <div className="flex items-center justify-center my-8">
      <h2 className="text-4xl text-center font-extrabold text-[#ff933b]">Welcome to Vedika Granthasala</h2>
      </div>
     <div className="flex items-center justify-center my-8 col-span-2">
     <Service/>
     </div>
      </div>
  )
}

export default WelcomeNote